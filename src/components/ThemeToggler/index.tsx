// ThemeToggler.tsx
import React from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';
import { IconWrapper } from './style';
import { useTheme } from 'styled-components';
 // Atualize o caminho para o ThemeContext

const ThemeToggler: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <IconWrapper onClick={toggleTheme}>
            {theme === 'light' ? <BiSun size={20} /> : <BiMoon size={20} />}
        </IconWrapper>
    );
}

export default ThemeToggler;
