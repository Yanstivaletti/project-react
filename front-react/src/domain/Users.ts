type Stacks = {
  language: string;
  framework: string
}

export type User = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  stacks: Array<Stacks>;
};

export interface IUsers {
  users: User[];
}

export const initialState: IUsers = {
  users: [
    {
      id: 0,
      nome: '',
      email: '',
      telefone: '',
      stacks: [{ language: '', framework: '' }],
    },
  ],
};
