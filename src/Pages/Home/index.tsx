import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Header } from '../../components/Header';
import { WrapperContentHome } from './style';
import { WellCome } from './wellcome';

const App: React.FC = () => {
  return (
    <WrapperContentHome>
      <Header
        MyIcon={FaHome}
        title="Início"
        subtitle="Segundo projeto React.JS"
      />
      <div>
        <WellCome
          title="Bem Vindo!"
          subTitle="Nosso segundo Trabalho com React"
        />
      </div>
    </WrapperContentHome>
  );
};

export default App;
