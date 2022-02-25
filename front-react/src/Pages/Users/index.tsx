import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { Header } from '../../components/Header';
import { Table } from '../../components/Table';
import { WrapperContentUsers } from './style';
import { ListUsers } from './style';

const App: React.FC = () => {
  return (
    <WrapperContentUsers>
      <Header MyIcon={FaUsers} title="Usuários" subtitle="Todos os usuários" />
      <ListUsers>
        <Table />
      </ListUsers>
    </WrapperContentUsers>
  );
};

export default App;
