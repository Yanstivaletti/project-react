import React, { useState } from 'react';
import { useMyUsers } from '../../../Context/usersContext';
import { ToggleSwitch } from '../../ToggleSwitch';
import MenuList from './MenuList';
import { WrapperMenuBar } from './style';

const MenuBar: React.FC = () => {
  const [check, setCheck] = useState(false);
  const { setDarkTheme } = useMyUsers();

  const handleClick = () => {
    setCheck((check) => !check);
    console.log('cheguei', check);

    setDarkTheme((check) => !check);
  };

  return (
    <WrapperMenuBar>
      <MenuList />
      <ToggleSwitch onClick={handleClick} />
    </WrapperMenuBar>
  );
};

export default MenuBar;
