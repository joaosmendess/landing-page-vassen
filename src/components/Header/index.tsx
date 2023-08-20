
import React, {useState, useEffect} from 'react';
import Logo from '../Logo';
import Menu from '../Menu';
import { StyledHeader } from './style';

const Header: React.FC = () => {

const [ scrolled, setScrolled] = useState<boolean>(false);

useEffect(() => { 
  const handleScroll = () => {
    const offsetY = window.scrollY;
    if(offsetY >10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }
  window.addEventListener('scroll' , handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }

}, [])

  return (
    <StyledHeader scrolled={scrolled} >
      
      <Logo />
      <Menu />
    </StyledHeader>
  );
}

export default Header;
