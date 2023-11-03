import Saida from "../../components/buttons/exit/sair";
import Purple from "../../components/buttons/purple/principal";
import { Card, Card2, Fundo, Texto } from "./styleThank";
import background from '../../assets/local.svg'

function ThankYouPage() {
    return(
        <Fundo src={background}>
            <Card>
                <Card2>
                    <Saida/>
                </Card2>
                <Texto>
                    Suas respostas foram salvas com sucesso!
                </Texto>
                <Purple CTA={'OK'}/>
            </Card>
        </Fundo>
    )
}

export default ThankYouPage; 