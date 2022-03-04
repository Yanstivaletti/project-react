import React from 'react';
import logo from '../../../assets/logo.png';
import { WrapperLogoBar } from './style';
const LogoBar: React.FC = () => {
  return (
    <WrapperLogoBar>
     <img src = {logo}/>
    </WrapperLogoBar>
  );
};

export default LogoBar;
