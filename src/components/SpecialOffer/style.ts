import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  width: 800px;
  margin: auto;
  background-color: transparent;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 390px;
    justify-content: center;
    
  }
`;

export const BenefitsList = styled.div`
  flex: 0.65;
  padding: 20px;

  
`;

export const StyledUl = styled.ul`
  list-style: none;
  padding-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  background: rgb(9, 16, 19);
  padding: 24px;
  border-radius: 4px;
  width: 370px;
`;

export const StyledLi = styled.li`
  color: #F8F8FA;
  font-size: 16px;
  background: rgb(9, 16, 19);
  padding: 13px;
  border-radius: 4px;
  font-weight: 600;


  &::before {
    content: '✔︎';
    color: #F2A81D;
    font-size: 20px;
    display: inline-block;
    width: 20px;
    margin-left: -25px;
  }
`;

export const PriceDetails = styled.div`
  flex: 0.25;
  text-align: center;
  margin-left: 50px;
  display: flex;
  justify-content: end;
  flex-direction: column;
  
  @media (max-width: 768px) {

align-items: center;

margin-left: 0;  /* Remove a margem esquerda */
    justify-content: baseline; /* Centraliza o conteúdo */
  


}
`;

export const OriginalPrice = styled.span`
  font-size: 24px;
  color: #f8f8f8;
  font-weight: 600;
  font-family: Poppins, "Segoe UI", Verdana, Arial, sans-serif;
`;

export const NewPrice = styled.span`
  font-size: 24px;
  color: #f8f8f8;
  font-weight: 600;
`;

export const Installment = styled.div`
  font-size: 24px;
  color: #f8f8f8;
  font-weight: 600;


>span{
   display: flex;
   margin-top: 25px;
   font-size: 35px;
}
  >strong {
    font-size: 64px;
    background: linear-gradient(45deg, #F2A81D, #FF8C00);
    color: transparent; 
    background-clip: text;
    -webkit-background-clip: text;
    font-family: Poppins, "Segoe UI", Verdana, Arial, sans-serif;
  }


  @media (max-width: 768px) {
>span {
    display: flex;
    font-size:30px;
    flex-direction: column;
    margin: 0;
   
}

}
`;

export const CatchyText = styled.div`
  font-size: 2rem;
  color: #f8f8fa;
  font-family: Poppins, "Segoe UI", Verdana, Arial, sans-serif;
  background-clip: text;
  -webkit-background-clip: text;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 15px;

  >span {
    background: linear-gradient(45deg, #F2A81D, #FF8C00);
    color: transparent; 
    background-clip: text;
    -webkit-background-clip: text;
  }
`;
export const WhatsappButton = styled.button`
    padding: 12px 25px;
  color: #091013;
  background: linear-gradient(45deg, #F8CF2C, #FF8C00); // Gradiente do amarelo para o laranja
  border: none;
  border-radius: 25px; 
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); 
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s; 
  outline: none; 
  letter-spacing: 1px; 
  font-family: Poppins, "Segoe UI", Verdana, Arial, sans-serif;
  font-size: 1.125rem;
  font-weight: 600; 
  margin-top: 20px;
text-decoration: none;
  &:hover {
      background: linear-gradient(180deg, #FF8C00, #F8CF2C); // Inverte o gradiente quando pairado
     
  }

`;

export const StyledLogoRevest = styled.img`
     max-width: 120px; // Ajuste conforme necessário
    max-height: 130px; // Ajuste conforme necessário
    height: auto;
    margin-top: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    // adicione mais estilos conforme a necessidade
    transition: transform 0.3s ease;
&:hover {
  transform: scale(1.05);  /* Efeito de zoom quando passa o mouse por cima */

};

`;
export const StyledLogoVassen = styled.img`
     max-width: 170px; // Ajuste conforme necessário
    max-height: 150px; // Ajuste conforme necessário
    height: auto;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    // adicione mais estilos conforme a necessidade
    transition: transform 0.3s ease;
&:hover {
  transform: scale(1.05);  /* Efeito de zoom quando passa o mouse por cima */

};


`;

export const LogoDiv = styled.div `

display: flex;
flex-direction: row;
 justify-content: center; 
 gap: 20;


`