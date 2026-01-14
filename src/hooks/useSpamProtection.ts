import { useState, useCallback, useRef } from 'react';

interface SpamProtectionResult {
  canSubmit: boolean;
  errorMessage: string | null;
}

/**
 * Hook para proteção contra spam e abuso
 * Implementa rate limit, honeypot e validação básica
 */
export const useSpamProtection = () => {
  const [honeypot, setHoneypot] = useState('');
  const lastSubmitTime = useRef<number>(0);
  const submitCountRef = useRef<Map<string, { count: number; firstSubmit: number }>>(new Map());

  // Rate limit: tempo mínimo entre envios (3 segundos)
  const RATE_LIMIT_MS = 3000;
  
  // Rate limit por telefone: máximo de envios por período
  const MAX_SUBMITS_PER_PHONE = 3;
  const PHONE_RATE_WINDOW_MS = 60000; // 1 minuto

  // Verifica se pode enviar
  const checkCanSubmit = useCallback((phone: string): SpamProtectionResult => {
    const now = Date.now();

    // Verifica honeypot (se preenchido, é bot)
    if (honeypot.trim() !== '') {
      return {
        canSubmit: false,
        errorMessage: 'Erro de validação. Tente novamente.',
      };
    }

    // Verifica rate limit global
    if (lastSubmitTime.current > 0 && now - lastSubmitTime.current < RATE_LIMIT_MS) {
      const remainingSeconds = Math.ceil((RATE_LIMIT_MS - (now - lastSubmitTime.current)) / 1000);
      return {
        canSubmit: false,
        errorMessage: `Aguarde ${remainingSeconds}s antes de enviar novamente.`,
      };
    }

    // Verifica rate limit por telefone
    const phoneData = submitCountRef.current.get(phone);
    if (phoneData) {
      // Se passou o período, reseta
      if (now - phoneData.firstSubmit > PHONE_RATE_WINDOW_MS) {
        submitCountRef.current.delete(phone);
      } else if (phoneData.count >= MAX_SUBMITS_PER_PHONE) {
        return {
          canSubmit: false,
          errorMessage: 'Muitas tentativas com este número. Aguarde um momento.',
        };
      }
    }

    return { canSubmit: true, errorMessage: null };
  }, [honeypot]);

  // Registra um envio
  const registerSubmit = useCallback((phone: string) => {
    const now = Date.now();
    lastSubmitTime.current = now;

    // Incrementa contador do telefone
    const phoneData = submitCountRef.current.get(phone);
    if (phoneData) {
      submitCountRef.current.set(phone, {
        ...phoneData,
        count: phoneData.count + 1,
      });
    } else {
      submitCountRef.current.set(phone, {
        count: 1,
        firstSubmit: now,
      });
    }
  }, []);

  // Validação básica dos dados
  const validateData = useCallback((nome: string, phone: string): SpamProtectionResult => {
    // Nome muito curto
    if (nome.trim().length < 2) {
      return {
        canSubmit: false,
        errorMessage: 'Por favor, insira um nome válido.',
      };
    }

    // Nome com caracteres suspeitos
    if (/[<>{}[\]\\]/.test(nome)) {
      return {
        canSubmit: false,
        errorMessage: 'Nome contém caracteres inválidos.',
      };
    }

    // Telefone com formato inválido
    if (phone.length < 10 || phone.length > 11) {
      return {
        canSubmit: false,
        errorMessage: 'Telefone inválido. Verifique o número.',
      };
    }

    return { canSubmit: true, errorMessage: null };
  }, []);

  // Reset do honeypot
  const resetHoneypot = useCallback(() => {
    setHoneypot('');
  }, []);

  return {
    honeypot,
    setHoneypot,
    checkCanSubmit,
    registerSubmit,
    validateData,
    resetHoneypot,
  };
};
