import React from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';



// Inicialize o Mercado Pago com sua chave pública
initMercadoPago(import.meta.env.VITE_MERCADOPAGO_PUBLIC_KEY);

const MyComponent: React.FC = () => {
 
 
  return (
    <div>
      <Wallet initialization={{ preferenceId: '1339732727-f004cd56-24e9-4755-a9ff-44a4d43435aa', redirectMode: 'blank' } }  />
    </div>
  );
};

export default MyComponent;
