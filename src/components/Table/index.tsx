import React from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { User } from '../../domain/Users';
import { userService } from '../../Service/users';
import { theme } from '../../Styles/Dark';
import { WrapperTable } from './style';

type RowsBodyTableProps = {
  users: any;
  setInputForm: any;
  setIsChange: any
}

type TableProps = RowsBodyTableProps & {
  items: Array<String>
}

function RowsBodyTable({ users, setInputForm, setIsChange }: RowsBodyTableProps): JSX.Element {
  function handleDeleteUser(id: number) {
    userService.deleteUser(`/users/${id}`);
    setIsChange(true);
  }

  async function handleUpdateUser(id: number) {
    const response = await userService.getUserById(`/users/${id}`);
    setInputForm({
      id: response.data.id,
      nome: response.data.nome,
      email: response.data.email,
      telefone: response.data.telefone,
      stack: response.data.stack,
    });
  }

  return (
    <>
      {users && users.map((user: User) => {
        const { stacks } = user
        return (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.nome}</td>
            <td>{user.email}</td>
            <td>{user.telefone}</td>
            <td>
              {stacks.map((element, index) => (
                <p key={index}>{`${element.language} - ${element.framework}`}</p>
              ))}
            </td>
            <td>
              <button onClick={() => {
                console.log(user.id);
                handleUpdateUser(user.id);
              }}>
                <FaPencilAlt size={18} color={theme.colors.secondary} />
              </button>
              <button onClick={() => handleDeleteUser(user.id)}>
                <FaTrash size={18} color={theme.colors.secondary} />
              </button>
            </td>
          </tr>
        )
      })}
    </>
  );
}

export function Table({ items, users, setInputForm, setIsChange }: TableProps): JSX.Element {
  return (
    <WrapperTable>
      <thead>
        <tr>
          {items && items.map((element, index) => (
            <th key={index}>{element}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <RowsBodyTable
          users={users}
          setInputForm={setInputForm}
          setIsChange={setIsChange}
        />
      </tbody>
    </WrapperTable>
  );
}
