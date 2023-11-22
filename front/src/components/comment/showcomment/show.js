import { Coment, User, UserComt, UserFoto } from "./showStyled";
import userft from "../../../assets/evelyn.svg"

function Comentarios() {
 

    return(
        <Coment>
            <User>
                <UserFoto src={userft}/>
                @Evelyn_teixeira
            </User>
            <UserComt>
                É mais que um esporte, é um convite para transcender, driblar as adversidades 
                e enterrar nossos medos. No basquete, encontramos não apenas vitórias, 
                mas lições de coragem e persistência. 
            </UserComt>
        </Coment>
    )
}

export default Comentarios;