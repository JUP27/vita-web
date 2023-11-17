import Configuracoes from "../../../components/buttons/settings/config";
import { CardPerfil, EmailDoUsuario, Foto, Infos, NomeDoUsuario } from "./viewStyled";
// import fotoUsuario from '../../assets/Perfil.svg'
import { useUser } from "../../logins/UserContext.js"
// src={fotoUsuario}

function VerPerfil() {
    const { user } = useUser();
    return(
        <>
            <CardPerfil>
                <Foto/>
                <Infos>
                    <NomeDoUsuario> {user.name} </NomeDoUsuario>
                    <EmailDoUsuario>jupradegomes@gmail.com</EmailDoUsuario>
                </Infos>
                <Configuracoes/>
            </CardPerfil>
        </>
    )
}

export default VerPerfil; 