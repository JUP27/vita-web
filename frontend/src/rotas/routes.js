import { BrowserRouter, Routes, Route } from "react-router-dom" ;
import Sobre from "../pages/about/about";
import Formulario from "../pages/forms/form";
import Descricao from "../pages/hobbies/descriptions/abstract";
import Ranking from "../pages/hobbies/photos";
import HomePage from "../pages/home/home";
import Perfil from "../pages/profile/profile";

function Rota() {
    return(
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="/about" element={<Sobre/>}/>
                <Route path="/ranking" element={<Ranking/>}/>
                <Route path="/formulário" element={<Formulario/>}/>
                <Route path="/profile" element={<Perfil/>}/>
                <Route path="/descrição" element={<Descricao/>}/>
            </Routes>
    )
};

export default Rota; 