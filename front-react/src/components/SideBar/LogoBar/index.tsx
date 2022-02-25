import React from 'react';
import { Link } from 'react-router-dom';
import { WrapperLogoBar } from './style';

const LogoBar: React.FC = () => {
  return (
    <WrapperLogoBar>
      <Link to="/">{/* <Logo /> */}</Link>
    </WrapperLogoBar>
  );
};

export default LogoBar;
