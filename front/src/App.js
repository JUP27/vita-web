import './App.css';
import { BrowserRouter } from 'react-router-dom';
// import Rota from '../../front/src/rotas/routes';
// import Orientacao from './pages/direction/direct';
// import Cadastro from './pages/logins/cadastro';
import Login from './pages/logins/login';
import { UserProvider } from './pages/logins/UserContext';

function App() {
  return (
    <>
    <UserProvider>
      <BrowserRouter>
        {/* <Rota/> */}
        <Login/>
      </BrowserRouter>
      {/* <Orientacao/>
      <Cadastro/> */}
    </UserProvider>
    </>
  );
}

export default App;
