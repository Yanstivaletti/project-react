import React from 'react';
import logo from '../../../assets/logo.png';
import { WrapperLogoBar } from './style';
const LogoBar: React.FC = () => {
  return (
    <WrapperLogoBar>
      <a href="/">
        <img src={logo} alt="Logo" />
      </a>
    </WrapperLogoBar>
  );
};

export default LogoBar;
