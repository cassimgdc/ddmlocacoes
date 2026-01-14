import { useState, useCallback } from 'react';

/**
 * Hook para formatação e validação de telefone brasileiro
 * DDI (+55) em campo separado com valor padrão
 * Aceita números com ou sem o 9 adicional, com DDD
 * Formato: (XX) 9XXXX-XXXX ou (XX) XXXX-XXXX
 */
export const usePhoneFormat = () => {
  const [ddi, setDdi] = useState('+55');
  const [phone, setPhone] = useState('');
  const [rawPhone, setRawPhone] = useState('');

  // Remove tudo que não é número
  const cleanPhone = (value: string): string => {
    return value.replace(/\D/g, '');
  };

  // Formata o telefone para exibição (sem DDI)
  const formatPhone = (cleaned: string): string => {
    // Limita a 11 dígitos (DDD + 9 + 8 dígitos)
    const phone = cleaned.slice(0, 11);

    // Formata conforme o tamanho
    if (phone.length === 0) return '';
    if (phone.length <= 2) return `(${phone}`;
    if (phone.length <= 6) return `(${phone.slice(0, 2)}) ${phone.slice(2)}`;
    if (phone.length <= 10) {
      // Telefone sem o 9: (XX) XXXX-XXXX
      return `(${phone.slice(0, 2)}) ${phone.slice(2, 6)}-${phone.slice(6)}`;
    }
    // Telefone com o 9: (XX) 9XXXX-XXXX
    return `(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7)}`;
  };

  // Handler para input do telefone (apenas números)
  const handlePhoneChange = useCallback((value: string) => {
    const cleaned = cleanPhone(value);
    const phoneDigits = cleaned.slice(0, 11);
    
    setRawPhone(phoneDigits);
    setPhone(formatPhone(phoneDigits));
  }, []);

  // Handler para input do DDI
  const handleDdiChange = useCallback((value: string) => {
    // Garante que sempre comece com +
    const cleaned = value.replace(/[^0-9+]/g, '');
    if (!cleaned.startsWith('+')) {
      setDdi('+' + cleaned.replace(/\+/g, ''));
    } else {
      setDdi(cleaned);
    }
  }, []);

  // Valida se o telefone está completo (10 ou 11 dígitos: DDD + telefone)
  const isValidPhone = useCallback((): boolean => {
    return rawPhone.length >= 10 && rawPhone.length <= 11;
  }, [rawPhone]);

  // Retorna o telefone apenas com números para envio (com DDI)
  const getPhoneForSubmit = useCallback((): string => {
    const cleanDdi = ddi.replace(/\D/g, '');
    return `${cleanDdi}${rawPhone}`;
  }, [ddi, rawPhone]);

  // Retorna o telefone formatado para exibição na mensagem (com DDI)
  const getFormattedPhone = useCallback((): string => {
    return `${ddi} ${phone}`;
  }, [ddi, phone]);

  // Reset do estado
  const resetPhone = useCallback(() => {
    setPhone('');
    setRawPhone('');
    setDdi('+55');
  }, []);

  return {
    ddi,
    phone,
    rawPhone,
    handlePhoneChange,
    handleDdiChange,
    isValidPhone,
    getPhoneForSubmit,
    getFormattedPhone,
    resetPhone,
  };
};
