import Header from "../../components/header/header";
import astronauta from '../../assets/astronaut_jump.png'
// import estrelas from "../../assets/observar.png"
import { Buttons, Fundo, Present, Question, SmallTitle } from "./styledHome";
import Purple from "../../components/buttons/purple/principal";
import { Astronauta } from "../direction/styledDirect";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function HomePage() {
    const navigate = useNavigate();

    function goLogin() {
        navigate('/login')
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/');
        }
    }, [navigate]);

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
                        <Purple  CTA={"RANKING"}/>
                        <Purple CTA={"ORIENTAÇÃO"}/>
                        <Purple CTA={"LOGIN"} onClick={goLogin}/>
                       
                    </Buttons>
            </Present>
            <Astronauta src={astronauta}/>
        </Fundo>
     </>
    )
};

export default HomePage;