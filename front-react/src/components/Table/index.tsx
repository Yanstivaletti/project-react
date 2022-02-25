import React from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { useMyUsers } from '../../Context/usersContext';
import { User } from '../../domain/Users';
import { userService } from '../../Service/users';
import { theme } from '../../Styles/Dark';
import { WrapperTable } from './style';

function RowsBodyTable(): JSX.Element {
  const { users, setInputForm, setIsChange } = useMyUsers();

  function handleDeleteUser(id: number) {
    userService.deleteUser(`/users/${id}`);
    setIsChange(true);
  }

  async function handleUpdateUser(id: number) {
    const response = await userService.getUserById(`/users/${id}`);
    setInputForm({
      id,
      name: response.data.name,
      email: response.data.email,
      telefone: response.data.telefone,
      stack: response.data.stack,
    });
  }

  return (
    <>
      {users.map((user: User) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.telefone}</td>
          <td>{user.stacks}</td>
          <td>
            <button onClick={() => handleUpdateUser(user.id)}>
              <FaPencilAlt size={18} color={theme.colors.success} />
            </button>
            <button onClick={() => handleDeleteUser(user.id)}>
              <FaTrash size={18} color={theme.colors.error} />
            </button>
          </td>
        </tr>
      ))}
    </>
  );
}

export function Table(): JSX.Element {
  return (
    <WrapperTable>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Stacks</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <RowsBodyTable />
      </tbody>
    </WrapperTable>
  );
}
