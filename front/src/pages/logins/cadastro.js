import { Input } from "@chakra-ui/react";
import Saida from "../../components/buttons/exit/sair";
import Entrar from "../../components/buttons/send/sendButton";
import { Campos } from "./styledCadastro";
import { Card, FormControl, Fundo, Titulo } from "./styledLog";

function Cadastro() {

    return (
        <Fundo>
        <Card>
            <Saida/>
            <FormControl>
                <Titulo>Cadastro</Titulo>
                <Campos>
                    <Input type="email" placeholder="E-mail"/>
                    <Input type="password" placeholder="Senha"/>
                    <Input type="input" placeholder="Estado"/>
                </Campos>
                <Campos>
                    <Input type="input" placeholder="Nome"/>
                    <Input type="input" placeholder="Idade"/>
                    <Input type="input" placeholder="Hobby Atual"/>
                </Campos>
                <Entrar mensage={"Salvar"}/>
            </FormControl>

            {}
        </Card>
    </Fundo>
    )

}

export default Cadastro; 