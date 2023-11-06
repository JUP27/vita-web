import { Title } from "../about/styleAbout";
import { Astronauta, Fundo } from "./styledForm";
import lost from "../../assets/astronaut-lost.png"

function Formulario() {
    return(
        <>
           <Fundo>
                <Title>Desculpe, esta página ainda está em construção ...</Title>
                <Astronauta src={lost}/>
           </Fundo>
        </>
    )
}

export default Formulario; 