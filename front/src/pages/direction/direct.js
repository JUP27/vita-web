import { Astronauta, Fundo, Icons, Resumo, Sessao1 } from "./styledDirect";
import { Buttons, Present, Question, SmallTitle } from "../home/styledHome";
import { Title } from "../about/styleAbout";
import Purple from "../../components/buttons/purple/principal";
import lost from "../../assets/astronaut_jump.png"
import game from '../../assets/gameboy.svg'
import pesos from '../../assets/gym.svg'
import barraca from '../../assets/camp.svg'


function Orientacao() {
    return(
        <>
           <Fundo>
                <Sessao1>
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
                </Sessao1>
                <Resumo>
                    <Title>
                        <Icons src={game}/>
                        Estimulos Audiovisuais e Manuais
                    </Title>
                    <Title>
                        <Icons src={pesos}/>
                        Exercícios Físicos
                    </Title>
                    <Title>
                        <Icons src={barraca}/>                       
                        Atividades Externas
                    </Title>
                </Resumo>
           </Fundo>
        </>
    )
}

export default Orientacao; 