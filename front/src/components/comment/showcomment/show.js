import { Coment, User, UserComt, UserFoto, UserStar } from "./showStyled";
import userft from "../../../assets/Perfil.svg"

function Comentarios() {
    return(
        <Coment>
            <User>
                <UserFoto src={userft}/>
                @nome_usuário
            </User>
            <UserComt>Exemplo de comentário</UserComt>
            <UserStar/>
        </Coment>
    )
}

export default Comentarios;