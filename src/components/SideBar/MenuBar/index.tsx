import React from 'react';
import MenuList from './MenuList';
import { WrapperMenuBar } from './style';

const MenuBar: React.FC = () => {


  return (
    <WrapperMenuBar>
      <MenuList />
    </WrapperMenuBar>
  );
};

export default MenuBar;
