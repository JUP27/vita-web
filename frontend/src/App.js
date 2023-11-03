import { BrowserRouter } from 'react-router-dom/dist';
import './App.css';
// import Configuracoes from './components/buttons/settings/config';
import HomePage from './pages/home/home';
import Rota from './rotas/routes';


function App() {
  return (
    <>
    <BrowserRouter>
      <Rota/>
    </BrowserRouter>
      {/* <Configuracoes/> */}
    </>
  );
}

export default App;
