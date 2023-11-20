// import { Routes, Route } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import HomePage from "../pages/home/home.js";
import Sobre from "../pages/about/about.js";
import Ranking from '../pages/hobbies/photos.js'
import Perfil from "../pages/profile/profileOfc.js";
import VerPerfil from "../pages/profile/viewprofile/view.js";
import Descricao from "../pages/hobbies/descriptions/abstract.js";
import Orientacao from "../pages/direction/direct.js";
import { SearchBar } from "../components/search/searchBar.js";
import Comentar from "../components/comment/rating/rate.js";
import Cadastro from "../pages/logins/cadastro.js";
import Login from "../pages/logins/login.js";

function Rota() {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="sobre" element={<Sobre/>}/>
            <Route path="ranking" element={<Ranking/>}/>
            <Route path="perfil" element={<Perfil/>}/>
            <Route path="verperfil" element={<VerPerfil/>}/>
            <Route path="descrição" element={<Descricao/>}/>
            <Route path="orientação" element={<Orientacao/>}/>
            <Route path="search" element={<SearchBar/>}/>
            <Route path="comentar" element={<Comentar/>}/>
            <Route path="cadastro" element={<Cadastro/>}/>
            <Route path="login" element={<Login/>}/>
        </Routes>
    )
};

export default Rota; 