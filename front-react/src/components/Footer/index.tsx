import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { WrapperFooter } from './styles';

export function Footer() {
  useEffect(() => {
    toast.success('Sucesso!');
  }, []);

  return <WrapperFooter>Desenvolvido por Allan, João e Yan</WrapperFooter>;
}
