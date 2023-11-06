import { BrowserRouter, Routes, Route } from "react-router-dom" ;
import Sobre from "../../../frontend/src/pages/about/about";
import Formulario from "../pages/forms/form";
import Descricao from "../../../frontend/src/pages/hobbies/descriptions/abstract";
import Ranking from "../../../frontend/src/pages/hobbies/photos";
import HomePage from "../../../frontend/src/pages/home/home";
import Perfil from "../pages/profile/profile";

function Rota() {
    return(
            <Routes>
                <Route index element={<HomePage/>}/>
                {/* <Route path="/about" element={<Sobre/>}/>
                <Route path="/ranking" element={<Ranking/>}/>
                <Route path="/formulário" element={<Formulario/>}/>
                <Route path="/profile" element={<Perfil/>}/>
                <Route path="/descrição" element={<Descricao/>}/> */}
            </Routes>
    )
};

export default Rota; 