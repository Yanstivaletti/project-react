import React, { useState } from 'react';
import { FaUsers } from 'react-icons/fa';
import { Header } from '../../components/Header';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import { Table } from '../../components/Table';
import { useMyUsers } from '../../Context/usersContext';
import { WrapperContentUsers } from './style';
import { ListUsers } from './style';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { SubmitHandler, useForm } from 'react-hook-form'
import { userService } from '../../Service/users';
import { FaUserCircle } from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {AiOutlinePhone} from "react-icons/ai"

type CreateFormTypes = {
  nome: string
  email: string
  telefone: string
  language: string
  framework: string
  secondLanguage: string
  secondFramework: string
}

const schema = yup.object({
  nome: yup.string().required("Campo incompleto"),
  email: yup.string().email("Este e-mail não é válido").required("Campo incompleto"),
  telefone: yup.string().required("Campo incompleto"),
  language: yup.string().required("Campo incompleto"),
  framework: yup.string().required("Campo incompleto"),
  secondLanguage: yup.string().required("Campo incompleto"),
  secondFramework: yup.string().required("Campo incompleto"),
}).required();

const itemsHeaderTable = ['ID', 'Nome', 'Email', 'Telefone', 'Stacks', 'Ações']

const App: React.FC = () => {
  const { users, setInputForm, setIsChange } = useMyUsers();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<CreateFormTypes>({
    resolver: yupResolver(schema)
  });
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [createOrUpdate, setCreateOrUpdate] = useState('create')
  const [idUserUpdated, setIdUserUpdated] = useState<number>(0)

  const handleClickOpenModal = () => {
    setValue('nome', ``)
    setValue('email', ``)
    setValue('telefone', ``)
    setValue('language', ``)
    setValue('framework', ``)
    setValue('secondLanguage', ``)
    setValue('secondFramework', ``)

    setIsOpenModal(!isOpenModal)
  }

  // Delete user
  function handleDeleteUser(id: number) {
    userService.deleteUser(`/users/${id}`);
    setIsChange(true);
  }

  // Update user
  async function handleUpdateUser(id: number) {
    setCreateOrUpdate('update')
    setIdUserUpdated(id)
    const response = await userService.getUserById(`/users/${id}`);
    const data = response.data
    handleClickOpenModal()
    setValue('nome', `${data.nome}`)
    setValue('email', `${data.email}`)
    setValue('telefone', `${data.telefone}`)

    setValue('language', `${data.stacks[0].language}`)
    setValue('framework', `${data.stacks[0].framework}`)

    setValue('secondLanguage', `${data.stacks[1].language}`)
    setValue('secondFramework', `${data.stacks[1].framework}`)
  }

  const onSubmit: SubmitHandler<CreateFormTypes> = async ({
    nome,
    email,
    telefone,
    language,
    framework,
    secondLanguage,
    secondFramework
  }) => {
    const data = {
      nome: nome,
      email: email,
      telefone: telefone,
      stacks: [
        {
          language: language,
          framework: framework
        },
        {
          language: secondLanguage,
          framework: secondFramework
        }
      ]
    }
    const value = createOrUpdate === 'create' ? true : false;

    if (value) {
      await userService.saveUser('/users', data);
      setIsChange(true)
      handleClickOpenModal()
    } else {
      await userService.updateUser('/users', idUserUpdated, { id: idUserUpdated, ...data });
      setIsChange(true)
      handleClickOpenModal()
    }
  }

  const modalContent = (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input<CreateFormTypes>
          name="nome"
          placeholder="Nome"
          startIcon={<FaUserCircle color='#000' />}
          register={register}
          errors={errors}
        />
        <Input<CreateFormTypes>
          name="email"
          placeholder="Email"
          startIcon={<HiOutlineMail color='#000' />}
          register={register}
          errors={errors}
        />
        <Input<CreateFormTypes>
          name="telefone"
          placeholder="Telefone"
          startIcon={<AiOutlinePhone color='#000' />}
          register={register}
          errors={errors}
        />

        <Input<CreateFormTypes>
          name="language"
          register={register}
          errors={errors}
          placeholder="Linguagem"
        />
        <Input<CreateFormTypes>
          name="framework"
          register={register}
          errors={errors}
          placeholder="Framework"
        />

        <Input<CreateFormTypes>
          name="secondLanguage"
          register={register}
          errors={errors}
          placeholder="Linguagem"
        />
        <Input<CreateFormTypes>
          name="secondFramework"
          register={register}
          errors={errors}
          placeholder="Framework"
        />

        <button style={{ cursor: 'pointer' }} type="submit">Enviar</button>
      </form>
    </>
  )

  return (
    <WrapperContentUsers>
      <Header MyIcon={FaUsers} title="Usuários" subtitle="Todos os usuários" />
      <ListUsers>
        <Modal open={isOpenModal} onClose={handleClickOpenModal} modalContent={modalContent} iconClose={true} widthContent={'420px'} />
        <button style={{ alignSelf: 'end' }} onClick={() => {
          handleClickOpenModal();
          setCreateOrUpdate('create');
        }}>Teste</button>
        <Table
          items={itemsHeaderTable}
          users={users}
          setInputForm={setInputForm}
          setIsChange={setIsChange}
          handleDeleteUser={handleDeleteUser}
          handleUpdateUser={handleUpdateUser}
        />
      </ListUsers>
    </WrapperContentUsers>
  );
};

export default App;
