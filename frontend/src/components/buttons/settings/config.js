import Local from "./local/meio";
import Chave from "./password/tres";
import Lapis from "./pencil/pen";
import { Grupo } from "./styledCondfig";

function Configuracoes() {
    return(
        <Grupo>
            <Chave/>
            <Local/>
            <Lapis/>
        </Grupo>
    )
}

export default Configuracoes; 