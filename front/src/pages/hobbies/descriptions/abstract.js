import ActionButtons from "../../../components/actions/group";
import Comentarios from "../../../components/comment/showcomment/show";
import Header from "../../../components/header/header";
import { DivText } from "../photosStyled";
import { Display, FooterComentario, HobbieFoto, HobbieName, Text2, Titles } from "./abstractStyled";
import ball from '../../../assets/basquete-small.svg'


function Descricao(){
    return(
        <>
            <Header/>
            <Display>
                <DivText>
                    <HobbieName>
                        <HobbieFoto src={ball}/>
                        Basquete
                    </HobbieName>
                    <Text2>
                        O basquete é um esporte de equipe jogado entre dois times de cinco jogadores cada, 
                        cujo objetivo é arremessar uma bola através do aro do oponente para marcar pontos. 
                        A dinâmica do jogo envolve habilidades de driblar, passar e arremessar, com ênfase na colaboração 
                        entre os jogadores. Além disso, a defesa desempenha um papel crucial, impedindo os adversários 
                        de pontuar. O basquete é apreciado globalmente e é conhecido por sua rapidez e intensidade, 
                        cativando fãs com jogadas emocionantes e competições acirradas em níveis amador e profissional.
                    </Text2>
                </DivText>
                <DivText>
                    <HobbieName>Por onde começar?</HobbieName>
                    <Text2>
                        Compre uma bola baratinha, ache a quadra mais próxima de você, 
                        siga os perfis da CBB e NBA e #basquete, nas redes sociais para ficar 
                        por dentro de tudo e de quebra ganhar algumas dicas.
                    </Text2>
                </DivText>
                <Titles>Experiência dos outros usuários</Titles>
                <FooterComentario>
                    <Comentarios/>
                    <ActionButtons/>
                </FooterComentario>
            </Display>
        </>
    )
}

export default Descricao;