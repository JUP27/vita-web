import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/home";
import Sobre from "../pages/about/about";
import Ranking from '../pages/hobbies/photos.js'
import Perfil from "../pages/profile/profileOfc";
import VerPerfil from "../pages/profile/viewprofile/view";
import Descricao from "../pages/hobbies/descriptions/abstract";
import Orientacao from "../pages/direction/direct";
import { SearchBar } from "../components/search/searchBar";
import Comentar from "../components/comment/rating/rate";

function Rota() {
    return(
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path='/about' element={<Sobre/>}/>
                <Route path='/ranking' element={<Ranking/>}/>
                <Route path='/profile' element={<Perfil/>}/>
                <Route path='/visualizar' element={<VerPerfil/>}/>
                <Route path="/descrição" element={<Descricao/>}/>
                <Route path='/orientação' element={<Orientacao/>}/>
                <Route path='/search' element={<SearchBar/>}/>
                <Route path='/comment' element={<Comentar/>}/>
            </Routes>
    )
};

export default Rota; 