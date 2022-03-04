import React, { useState } from 'react';
import { FaHome, FaUsers } from 'react-icons/fa';
import { useMyUsers } from '../../../../Context/usersContext';
import { ToggleSwitch } from '../../../ToggleSwitch';
import { MenuItem } from './menuItem';
import { List } from './style';

const MenuList: React.FC = () => {

  const [check, setCheck] = useState(false);
  const { setDarkTheme } = useMyUsers();

  const handleClick = () => {
    setCheck((check) => !check);
    console.log('cheguei', check);

    setDarkTheme((check) => !check);
  };
  return (
    <List>
      <MenuItem Icon={FaHome} title="Início" path="/" />
      <MenuItem Icon={FaUsers} title="Usuários" path="/users" />
      <ToggleSwitch onClick={handleClick} />

    </List>
  );
};

export default MenuList;
