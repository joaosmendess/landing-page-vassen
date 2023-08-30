import React, {  ButtonHTMLAttributes } from 'react';

import {StyledButton} from './style'


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    color?: string;
    backgroundColor?: string;
  };



  const DynamicButton: React.FC<ButtonProps> = ({ color, backgroundColor, ...rest }) => {
    return (
        <StyledButton color={color} backgroundColor={backgroundColor} {...rest} />
    );
};

  export default DynamicButton