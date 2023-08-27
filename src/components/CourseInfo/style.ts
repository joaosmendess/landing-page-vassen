import styled from "styled-components";

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  padding: 20px;  // adiciona espaço em todos os lados
    // limita a largura máxima para manter uma boa legibilidade
  // centraliza na tela
    @media (max-width: 768px) { 
    flex-direction: column;
  }
`;

export const InfoItem = styled.div`
  flex: 2;
  min-width: 200px; 
  padding: 10px;
  text-align: center;
  
`;

export const Count = styled.span`
  display: block;
  font-size: 28px;
 

  font-weight: bold;
  color: #F2A81D;
`;

export const Description = styled.span`
  display: block;
  font-size: 1rem;
  margin-top: 10px;
  box-sizing: border-box;
    font-family: Poppins, "Segoe UI", Verdana, Arial, sans-serif;
    opacity: 2.8;
    color: #f8f8fa;
`;
