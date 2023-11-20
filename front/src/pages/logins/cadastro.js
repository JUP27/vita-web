import { Input } from "@chakra-ui/react";
import Saida from "../../components/buttons/exit/sair";
import Entrar from "../../components/buttons/send/sendButton";
import { Campos } from "./styledCadastro";
import { Card, FormControl, Fundo, Titulo } from "./styledLog";
import { useData } from "../../hooks/useData";
import { useTokenNotNull } from "../../hooks/useTokenNotNull";

function Cadastro() {
    const {form, onChangeForm, handleSubmit, message} = useData({username:'', password:'', email:'', estado:'', idade:'', hobby:''},'/user/cadastro');

    useTokenNotNull();

    return (
        <Fundo>
        <Card>
            <Saida/>
            <FormControl onSubmit={handleSubmit}>
                <Titulo>Cadastro</Titulo>
                <Campos>
                    <Input type="email" 
                        placeholder="E-mail"
                        value={form.email}
                        onChange={onChangeForm}
                    />
                    <Input type="password" 
                        placeholder="Senha"
                        value={form.password}
                        onChange={onChangeForm}
                    />
                    <Input type="input" 
                        placeholder="Estado"
                        value={form.estado}
                        onChange={onChangeForm}
                    />
                </Campos>
                <Campos>
                    <Input type="input" 
                        placeholder="Nome" 
                        value={form.username}
                        onChange={onChangeForm}
                    />
                    <Input type="input" 
                        placeholder="Idade"
                        value={form.idade}
                        onChange={onChangeForm}
                    />
                    <Input type="input" 
                        placeholder="Hobby Atual"
                        value={form.hobby}
                        onChange={onChangeForm}
                    />
                    {message &&  <p>{message} </p>}
                </Campos>
                <Entrar mensage={"Salvar"}/>
            </FormControl>

            {}
        </Card>
    </Fundo>
    )

}

export default Cadastro; 