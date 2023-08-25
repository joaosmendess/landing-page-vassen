
import React, {useState, useEffect} from 'react';
import Logo from '../Logo';
import Menu from '../Menu';
import { StyledHeader ,MenuButton } from './style';
import { debounce } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);


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
    <MenuButton onClick={() => setMenuOpen(prev => !prev)}>
  <FontAwesomeIcon icon="bars"  style={{ background: "transparent" }}  />
</MenuButton>
    <Menu menuOpen={menuOpen} />
  </StyledHeader>
  );
}

export default Header;
