import Local from "./local/meio";
import Chave from "./password/tres";
import Lapis from "./pencil/pen";
import { Grupo } from "./styledCondfig";
import { useNavigate } from "react-router-dom";

function Configuracoes() {
    const navigate = useNavigate();

      function goProfile() {
        navigate("/profile")
    }

     function goLogin() {
        navigate('/login')
    }


    return(
        <Grupo>
            <Chave onClick={goLogin}/>
            <Local onClick={goProfile}/>
            <Lapis onClick={goProfile}/>
        </Grupo>
    )
}

export default Configuracoes; 