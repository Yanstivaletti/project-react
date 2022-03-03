import { AxiosResponse } from 'axios';
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { IUsers, User } from '../domain/Users';
import { userService } from '../Service/users';

type Stacks = {
  language: string;
  framework: string
}

type InputDataUser = {
  id?: number;
  nome: string;
  email: string;
  telefone: string;
  stacks: Array<Stacks>
};

type UserContextType = {
  users: User[];
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  handleSetUsers: React.Dispatch<React.SetStateAction<IUsers | null>>;
  getUsers: () => void;
  inputForm: InputDataUser | any;
  setInputForm: React.Dispatch<React.SetStateAction<InputDataUser | any>>;
  isChange: boolean;
  setIsChange: React.Dispatch<React.SetStateAction<boolean>>;
};

type UserContextProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext({} as UserContextType);

const UsersProvider = ({ children }: UserContextProviderProps) => {
  const [users, setUsers] = useState([]);
  const [inputForm, setInputForm] = useState({
    id: '',
    nome: '',
    email: '',
    telefone: '',
    stacks: [
      {
        language: '',
        framework: '',
      },
    ]
  });
  const [isChange, setIsChange] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  const handleSetUsers = useCallback((data) => {
    setUsers(data);
  }, []);

  const getUsers = async () => {
    const response: AxiosResponse<IUsers> = await userService.getAllUsers(
      '/users',
    );
    handleSetUsers(response.data);
    setIsChange(false);
  };

  useEffect(() => {
    getUsers();
  }, [isChange]);

  return (
    <UserContext.Provider
      value={{
        users,
        darkTheme,
        setDarkTheme,
        handleSetUsers,
        getUsers,
        inputForm,
        setInputForm,
        isChange,
        setIsChange,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

function useMyUsers() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUtils must be used within an UserProvider');
  }

  return context;
}

export { UsersProvider, useMyUsers };
