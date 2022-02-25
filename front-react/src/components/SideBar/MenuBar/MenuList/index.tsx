import React from 'react';
import { MenuItem } from './menuItem';
import { FaHome, FaUsers } from 'react-icons/fa';
import { List } from './style';

const MenuList: React.FC = () => {
  return (
    <List>
      <MenuItem Icon={FaHome} title="Início" path="/" />
      <MenuItem Icon={FaUsers} title="Usuários" path="/users" />
    </List>
  );
};

export default MenuList;
