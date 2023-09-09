import React from 'react';
import { StyledFooter, DevInfo, SocialLink } from './style';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <DevInfo>
        Desenvolvido por <span>João Mendes</span>
      </DevInfo>
      <div>
        <SocialLink href="https://github.com/joaosmendess" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </SocialLink>
        <SocialLink href="https://linkedin.com/in/joaosmendess" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn size={24} />
        </SocialLink>
      </div>
    </StyledFooter>
  );
};

export default Footer;
