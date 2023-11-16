import { useNavigate } from "react-router-dom";
import { Card, Fundo, Titulo, FormHelperText, FormHelperText2, FormControl} from "./styledLog";
import { Input } from '@chakra-ui/react'
import Saida from "../../components/buttons/exit/sair";
import Entrar from "../../components/buttons/send/sendButton";

function Login() {
    // const navegacao = useNavigate();

    // function goCadastro() {
    //     navegacao('/cadastro')
    // }

    // const goBack = () => {
    //     navegacao(-1)
    //   } 
    
    return(
        <Fundo>
            <Card>
                <Saida/>
                <FormControl>
                    <Titulo>Login</Titulo>
                    {/* <FormLabel>Email</FormLabel> */}
                    <Input type='email' placeholder="Email"/>
                    {/* <FormLabel>Senha</FormLabel> */}
                    <Input type='password' placeholder="Senha"/>
                    <FormHelperText>Não lembro minha senha</FormHelperText>
                    <Entrar mensage={"Entrar"}/>
                    <FormHelperText2>Ainda não possui um cadastro? 
                        <a>Cadastre-se</a>
                    </FormHelperText2>
                </FormControl>
            </Card>
        </Fundo>
    )
};

export default Login; 