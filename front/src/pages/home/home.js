import Header from "../../components/header/header";
import astronauta from '../../assets/astronaut_jump.png'
import { Buttons, Fundo, Present, Purple, Question, SmallTitle } from "./styledHome";
import { Astronauta } from "../direction/styledDirect";
import { useNavigate } from "react-router-dom";



function HomePage() {
    const navigate = useNavigate()

    function goLogin() {
        navigate('/login')
    }

    function goOrient() {
        navigate("/orientacao")
    }

    function goRanking() {
        navigate("/ranking")
    }

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
                        <Purple onClick={goRanking}>RANKING</Purple>
                        <Purple onClick={goOrient}>ORIENTAÇÃO</Purple>
                        <Purple onClick={goLogin}>LOGIN</Purple>
                       
                    </Buttons>
            </Present>
            <Astronauta src={astronauta}/>
        </Fundo>
     </>
    )
};

export default HomePage;