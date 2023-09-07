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
    width: 420px;
    justify-content: center;
    
  }
`;

export const BenefitsList = styled.div`
  flex: 0.65;
  padding-right: 40px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
flex: 0;
    
    
  }
`;

export const StyledUl = styled.ul`
  list-style: none;
  padding-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  background: rgb(21, 31, 33);
  padding: 24px;
  border-radius: 4px;
`;

export const StyledLi = styled.li`
  color: #F8F8FA;
  font-size: 18px;
  padding: 5px 0;
  background: rgb(21, 31, 33);
  padding: 14px;
  border-radius: 4px;
  font-weight: 600;

  &::before {
    content: '●';
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
  margin-left: 40px;
  display: flex;
  justify-content: end;
  flex-direction: column;
  
  @media (max-width: 768px) {

align-items: center;

margin-left: 0;  /* Remove a margem esquerda */
    justify-content: baseline; /* Centraliza o conteúdo */
  flex: 0;


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