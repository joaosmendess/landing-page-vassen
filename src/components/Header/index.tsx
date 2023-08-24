
import React, {useState, useEffect} from 'react';
import Logo from '../Logo';
import Menu from '../Menu';
import { StyledHeader } from './style';
import { debounce } from 'lodash';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setScrolled(currentScrollPos > 10);
      setVisible(visible);
      setPrevScrollPos(currentScrollPos);
    },100)

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <StyledHeader scrolled={scrolled} visible={visible}>
      
      <Logo />
      <Menu />
    </StyledHeader>
  );
}

export default Header;
