import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Footer } from '../components/Footer';
import LogoBar from '../components/SideBar/LogoBar';
import MenuBar from '../components/SideBar/MenuBar';
import { useMyUsers } from '../Context/usersContext';
import { MyRoutes } from '../Routes';
import GlobalStyles from '../Styles/GlobalStyles';
import { DarkTheme, LightTheme } from '../Styles/theme';
import { WrapperTemplate } from './style';

const Template: React.FC = () => {
  const { darkTheme } = useMyUsers();

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme ? DarkTheme : LightTheme}>
          <GlobalStyles />
          <WrapperTemplate>
            <LogoBar />
            <MenuBar />
            <MyRoutes />
            <Footer />
          </WrapperTemplate>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};

export default Template;
