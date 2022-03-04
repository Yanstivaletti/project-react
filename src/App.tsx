import { UsersProvider } from './Context/usersContext';
import Template from './Template';

const App: React.FC = () => {
  return (
    <>
      <UsersProvider>
        <Template />
      </UsersProvider>
    </>
  );
};

export default App;
