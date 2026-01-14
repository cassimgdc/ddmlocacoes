import { useState, useCallback } from 'react';

/**
 * Hook para formatação e validação de telefone brasileiro
 * Aceita números com ou sem o 9 adicional, com DDD
 * Formato: +55 (XX) 9XXXX-XXXX ou +55 (XX) XXXX-XXXX
 */
export const usePhoneFormat = () => {
  const [phone, setPhone] = useState('');
  const [rawPhone, setRawPhone] = useState('');

  // Remove tudo que não é número
  const cleanPhone = (value: string): string => {
    return value.replace(/\D/g, '');
  };

  // Formata o telefone para exibição
  const formatPhone = (value: string): string => {
    const cleaned = cleanPhone(value);
    
    // Remove o 55 do início se existir (será adicionado automaticamente)
    let phone = cleaned;
    if (phone.startsWith('55') && phone.length > 2) {
      phone = phone.slice(2);
    }

    // Limita a 11 dígitos (DDD + 9 + 8 dígitos)
    phone = phone.slice(0, 11);

    // Formata conforme o tamanho
    if (phone.length === 0) return '';
    if (phone.length <= 2) return `+55 (${phone}`;
    if (phone.length <= 6) return `+55 (${phone.slice(0, 2)}) ${phone.slice(2)}`;
    if (phone.length <= 10) {
      // Telefone sem o 9: (XX) XXXX-XXXX
      return `+55 (${phone.slice(0, 2)}) ${phone.slice(2, 6)}-${phone.slice(6)}`;
    }
    // Telefone com o 9: (XX) 9XXXX-XXXX
    return `+55 (${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7)}`;
  };

  // Handler para input
  const handlePhoneChange = useCallback((value: string) => {
    const cleaned = cleanPhone(value);
    // Remove o 55 do início se existir
    let phoneDigits = cleaned;
    if (phoneDigits.startsWith('55') && phoneDigits.length > 2) {
      phoneDigits = phoneDigits.slice(2);
    }
    phoneDigits = phoneDigits.slice(0, 11);
    
    setRawPhone(phoneDigits);
    setPhone(formatPhone(value));
  }, []);

  // Valida se o telefone está completo (8 ou 9 dígitos após DDD)
  const isValidPhone = useCallback((): boolean => {
    const cleaned = rawPhone;
    // Deve ter entre 10 e 11 dígitos (DDD + telefone)
    return cleaned.length >= 10 && cleaned.length <= 11;
  }, [rawPhone]);

  // Retorna o telefone apenas com números para envio
  const getPhoneForSubmit = useCallback((): string => {
    return `55${rawPhone}`;
  }, [rawPhone]);

  // Retorna o telefone formatado para exibição na mensagem
  const getFormattedPhone = useCallback((): string => {
    return phone;
  }, [phone]);

  // Reset do estado
  const resetPhone = useCallback(() => {
    setPhone('');
    setRawPhone('');
  }, []);

  return {
    phone,
    rawPhone,
    handlePhoneChange,
    isValidPhone,
    getPhoneForSubmit,
    getFormattedPhone,
    resetPhone,
  };
};
