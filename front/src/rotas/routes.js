import Sobre from "../pages/about/about";
import Ranking from '../pages/hobbies/photos'
import Perfil from "../pages/profile/profileOfc";
import VerPerfil from "../pages/profile/viewprofile/view";
import Descricao from "../pages/hobbies/descriptions/abstract";
import Orientacao from "../pages/direction/direct";
import Cadastro from "../pages/logins/cadastro";
import Login from "../pages/logins/login";
import HomePage from '../pages/home/home';
import {BrowserRouter,Route, Routes } from "react-router-dom";

function Rota() {
    return (
       <BrowserRouter>
            <Routes>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="sobre" element={<Sobre/>}/>
            <Route path="ranking" element={<Ranking/>}/>
            <Route path="perfil" element={<Perfil/>}/>
            <Route path="verperfil" element={<VerPerfil/>}/>
            <Route path="descricao" element={<Descricao/>}/>
            <Route path="orientacao" element={<Orientacao/>}/>
            <Route path="cadastro" element={<Cadastro/>}/>
        </Routes>
       </BrowserRouter>

       
    )
};

export default Rota;