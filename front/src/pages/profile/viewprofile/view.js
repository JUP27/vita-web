import Configuracoes from "../../../components/buttons/settings/config";
import { CardPerfil, EmailDoUsuario, Foto, Infos, NomeDoUsuario } from "./viewStyled";
// import fotoUsuario from '../../assets/Perfil.svg'
// src={fotoUsuario}

function VerPerfil() {
    return(
        <>
            <CardPerfil>
                <Foto/>
                <Infos>
                    <NomeDoUsuario>Juliana Prade </NomeDoUsuario>
                    <EmailDoUsuario>jupradegomes@gmail.com</EmailDoUsuario>
                </Infos>
                <Configuracoes/>
            </CardPerfil>
        </>
    )
}

export default VerPerfil; 