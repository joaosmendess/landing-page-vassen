import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    color?: string;
    backgroundColor?: string;
  };
  
export const StyledButton = styled.button<ButtonProps>`

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
      background: linear-gradient(45deg, #FF8C00, #F8CF2C); // Inverte o gradiente quando pairado
      transform: translateY(-2px); 
  }

  &:active {
      transform: translateY(1px); 
  }
`;