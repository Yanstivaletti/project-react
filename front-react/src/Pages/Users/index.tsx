import React, { useState } from 'react';
import { FaUsers } from 'react-icons/fa';
import { Header } from '../../components/Header';
import Modal from '../../components/Modal';
import { Table } from '../../components/Table';
import { useMyUsers } from '../../Context/usersContext';
import { WrapperContentUsers } from './style';
import { ListUsers } from './style';

const itemsHeaderTable = ['ID', 'Nome', 'Email', 'Telefone', 'Stacks', 'Ações']

const App: React.FC = () => {
  const { users, setInputForm, setIsChange } = useMyUsers();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleClickOpenModal = () => {
    setIsOpenModal(!isOpenModal)
  }

  const modalContent = (
    <>
      <div>Teste</div>
      <div>Teste</div>
      <div>Teste</div>
      <div>Teste</div>
      <div>Teste</div>
      <div>Teste</div>
      <div>Teste</div>
      <div>Teste</div>
      <div>Teste</div>
      <div>Teste</div>
      <div>Teste</div>
    </>
  )

  return (
    <WrapperContentUsers>
      <Header MyIcon={FaUsers} title="Usuários" subtitle="Todos os usuários" />
      <ListUsers>
        <Modal open={isOpenModal} onClose={handleClickOpenModal} modalContent={modalContent} iconClose={true} />
        <button style={{ alignSelf: 'end' }} onClick={handleClickOpenModal}>Teste</button>
        <Table
          items={itemsHeaderTable}
          users={users}
          setInputForm={setInputForm}
          setIsChange={setIsChange}
        />
      </ListUsers>
    </WrapperContentUsers>
  );
};

export default App;
