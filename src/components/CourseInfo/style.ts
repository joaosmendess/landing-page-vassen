import styled from "styled-components";

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: space-between;
  padding: 20px;  // adiciona espaço em todos os lados
    // limita a largura máxima para manter uma boa legibilidade
  // centraliza na tela
    @media (max-width: 768px) { 
    flex-direction: column;
  }
  background: none;

`;

export const InfoItem = styled.div`
  flex: 2;
  min-width: 150px; 
  padding: 10px;
  text-align: center;
  height: 170px;
  margin-bottom: 20px;
 background: rgb(9, 16, 19);
 border: 1px solid rgb(62, 58, 74);
 border-radius: 4px 4px 0px 0px;
 
 
  
`;

export const Count = styled.span`
  display: block;
  font-size: 24px;
  background: none;
  border-bottom: 3px solid #F2A81D;
 

  font-weight: bold;
  color: #F2A81D;
`;

export const Description = styled.span`
  display: block;
  font-size: 1rem;
  margin-top: 25px;
  box-sizing: border-box;
    font-family: Poppins, "Segoe UI", Verdana, Arial, sans-serif;
    opacity: 2.8;
    color: #f8f8fa;
  background: none;

`;
