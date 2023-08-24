import React from 'react';
import { StyledLogo } from './style';
import logo from '../../../public/assets/logo/vassendark.png'

const Logo: React.FC = () => {
  return <StyledLogo src={logo} alt="Logo Vassen" />;
}

export default Logo;
