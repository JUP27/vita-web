import { Card, Fundo, Titulo, FormHelperText, FormControl} from "./styledLog";
import { Input } from '@chakra-ui/react'

function Login() {
    return(
        <Fundo>
            <Card>
                <FormControl>
                    <Titulo>Login</Titulo>
                    {/* <FormLabel>Email</FormLabel> */}
                    <Input type='email' placeholder="Email"/>
                    {/* <FormLabel>Senha</FormLabel> */}
                    <Input type='password' placeholder="Senha"/>
                    <FormHelperText>Não lembro minha senha</FormHelperText>
                </FormControl>
            </Card>
        </Fundo>
    )
};

export default Login; 