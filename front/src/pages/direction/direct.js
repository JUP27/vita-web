import { Title } from "../about/styleAbout";
import { Astronauta, Fundo } from "./styledDirect";
import lost from "../../assets/astronaut-lost.png"

function Orientacao() {
    return(
        <>
           <Fundo>
                <Title>Desculpe, esta página ainda está em construção ...</Title>
                <Astronauta src={lost}/>
           </Fundo>
        </>
    )
}

export default Orientacao; 