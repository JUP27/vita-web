import { Direita, Display, Esquerda, Foto, Text, Title } from "./styleAbout";
import perfil from "../../assets/Perfil.png";
import Header from "../../components/header/header";

function Sobre() {
    return(
        <>
            <Header/>
            <Display>
                <Direita>
                    <Foto src={perfil}/>
                </Direita>
                <Esquerda>
                    <Title>Quem eu sou e porque criei este projeto?</Title>
                    <Text>
                        Meu nome é Juliana Prade Gomes, sou filha única, 
                        e estudante do  Ensino Médio Técnico para web pelo Senac São Leopoldo, 
                        onde conheci a programação e acabei me apaixonando, também amo 
                        praticar esportes e meu favorito é o basquete. 
                        Criei este projeto para ajudar pessoas em situação de isolamento social 
                        a reestabelecerem vida social atráves de novas práticas e 
                        hábitos que incentivem a criação de novas conexões e descubram novas paixões. 
                    </Text>
                </Esquerda>
            </Display>
        </>
    )
}

export default Sobre; 