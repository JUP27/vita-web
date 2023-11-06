import Header from "../../components/header/header";
import astronauta from '../../assets/astronaut_jump.png'
import { Astronauta } from "../forms/styledForm";
// import estrelas from "../../assets/observar.png"
import { Buttons, Direita, Fundo, Present, Question, SmallTitle } from "./styledHome";
import Purple from "../../components/buttons/purple/principal";

function HomePage() {
    return(
     <>
        <Header/>
        <Fundo>
            <Present>
                <SmallTitle>Opa querido!</SmallTitle>
                    <Question>
                            Vamos descobrir seu 
                            novo passatempo?
                    </Question>
                    <SmallTitle>
                            Escolha uma das opções para iniciarmos sua jornada de autodescoberta 
                            nos difentes hobbies espalhados pelo mundão
                    </SmallTitle>
                    <Buttons>
                        <Purple CTA={"RANKING"}/>
                        <Purple CTA={"FORMULÁRIO"}/>
                        <Purple CTA={"LOGIN"}/>
                       
                    </Buttons>
            </Present>
            <Astronauta src={astronauta}/>
        </Fundo>
     </>
    )
};

export default HomePage;