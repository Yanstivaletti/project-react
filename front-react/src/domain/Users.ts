export type User = {
  id: number;
  name: string;
  email: string;
  telefone: string;
  stacks: [{ languages: string; framework: string }];
};

export interface IUsers {
  users: User[];
}

export const initialState: IUsers = {
  users: [
    {
      id: 0,
      name: '',
      email: '',
      telefone: '',
      stacks: [{ languages: '', framework: '' }],
    },
  ],
};
