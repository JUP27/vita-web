import { Astronauta, Fundo } from "./styledDirect";
import lost from "../../assets/astronaut_jump.png"
import { Buttons, Present, Question, SmallTitle } from "../home/styledHome";
import Purple from "../../components/buttons/purple/principal";
import { Title } from "../about/styleAbout";

function Orientacao() {
    return(
        <>
           <Fundo>
                <Present>
                    <Question>Bora planejar sua jornada de descoberta</Question>
                    <SmallTitle>
                        Este site foi criado para que você 
                        possa descobrir novos hobbies para inserir 
                        sua rotina e se encantar por novos universos. 
                    </SmallTitle>
                    <SmallTitle>
                        Para facilitar sua jornada conosco aqui embaixo 
                        tem algumas definições das principais áreas de todos 
                        os hobbies espalhados pelo mundo.
                    </SmallTitle>
                    <Buttons>
                        <Purple CTA={"Descobrir"}/>
                    </Buttons>
                </Present>
                <Astronauta src={lost}/>
                {/* <Title>Estimulos Audiovisuais e Manuais</Title>
                <Title>Exercícios Físicos</Title>
                <Title>Atividades Externas </Title> */}
           </Fundo>
        </>
    )
}

export default Orientacao; 