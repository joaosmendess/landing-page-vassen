import React from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';
import { IconWrapper } from './style';

export interface ThemeToggleProps {
    checked: boolean;
    onChange: () => void;
}

const ThemeToggler: React.FC<ThemeToggleProps> = ({ checked, onChange }) => {
    return (
        <IconWrapper onClick={onChange}>
            {checked ? <BiSun    size={20} /> : <BiMoon size={20} />}
        </IconWrapper>
    );
}

export default ThemeToggler;
