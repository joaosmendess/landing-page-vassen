import React from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';


// Inicialize o Mercado Pago com sua chave pública
initMercadoPago(import.meta.env.VITE_MERCADOPAGO_PUBLIC_KEY);

const MyComponent: React.FC = () => {
 
  return (
    <div>73
      <Wallet initialization={{ preferenceId: '13392727-8a8cd832-4525-44cb-9537-b5c2ced84b1d', redirectMode: 'blank' }}  />
    </div>
  );
};

export default MyComponent;
