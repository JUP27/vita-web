
import { Card, Card2, Fundo, Texto } from "./styleThank";
import background from '../../assets/local.svg'
import { Purple } from "../home/styledHome";
import { useNavigate } from "react-router-dom";
import { Sair, Sair2 } from "../logins/styledLog";
import bye from "../../assets/exit.svg"

function ThankYouPage() {
    const navigate = useNavigate();

    function goHome() {
        navigate("/")
    }

    return(
        <Fundo src={background}>
            <Card>
                <Card2>
                    <Sair>
                        <Sair2 src={bye} onClick={goHome}/>
                    </Sair>
                </Card2>
                <Texto>
                    Suas respostas foram salvas com sucesso!
                </Texto>
                <Purple onClick={goHome}>OK</Purple>
            </Card>
        </Fundo>
    )
};

export default ThankYouPage; 