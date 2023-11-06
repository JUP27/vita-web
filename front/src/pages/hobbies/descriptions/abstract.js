import ActionButtons from "../../../components/actions/group";
import Comentarios from "../../../components/comment/showcomment/show";
import Header from "../../../components/header/header";
import { Fundo } from "../../about/styleAbout";
import { DivText } from "../photosStyled";
import { Titles } from "./abstractStyled";


function Descricao(){
    return(
        <>
            <Header/>
            <Fundo>
                <DivText>
                    <h2>Basquete 
                        {/* criar variavel relacionada com pesquisa */}
                    </h2>
                    <p>Um esporte coletivo praticado entre duas equipes, 
                        ele é jogado com uma bola, onde o objetivo é inseri-la 
                        no cesto fixo que está localizado nas extremidades da quadra.
                    </p>
                </DivText>
                <Titles>Por onde começar?</Titles>
                <DivText>
                    Compre uma bola baratinha, ache a quadra mais próxima de você, 
                    siga os perfis da CBB e NBA e #basquete, nas redes sociais para ficar 
                    por dentro de tudo e de quebra ganhar algumas dicas.
                </DivText>
                <Titles>Experiência dos outros usuários</Titles>
                <Comentarios/>
                <ActionButtons/>
            </Fundo>
        </>
    )
}

export default Descricao;