// import { useNavigate } from "react-router-dom";
// import { Card, Fundo, Titulo, FormHelperText, FormHelperText2, FormControl} from "./styledLog";
// import { Input } from '@chakra-ui/react'
// import Saida from "../../components/buttons/exit/sair";
// import Entrar from "../../components/buttons/send/sendButton";

// function Login() {
//     // const navegacao = useNavigate();

//     // function goCadastro() {
//     //     navegacao('/cadastro')
//     // }

//     // const goBack = () => {
//     //     navegacao(-1)
//     //   } 
//     // const [username, setUsername] = useState('');
    
//     return(
//         <Fundo>
//             <Card>
//                 <Saida/>
//                 <FormControl>
//                     <Titulo>Login</Titulo>
//                     {/* <FormLabel>Email</FormLabel> */}
//                     <Input type='email' placeholder="Email"/>
//                     {/* <FormLabel>Senha</FormLabel> */}
//                     <Input type='password' placeholder="Senha"/>
//                     <FormHelperText>Não lembro minha senha</FormHelperText>
//                     <Entrar mensage={"Entrar"}/>
//                     <FormHelperText2>Ainda não possui um cadastro? 
//                         <a>Cadastre-se</a>
//                     </FormHelperText2>
//                 </FormControl>
//             </Card>
//         </Fundo>
//     )
// };

// export default Login; 
import React, { useState } from 'react';
import { useUser } from './UserContext';

const LoginComponent = () => {
  const { login } = useUser();
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    // Realizar a lógica de login (por exemplo, chamar uma API para autenticar o usuário)
    // e passar as informações do usuário, incluindo o nome, para a função de login
    login({ name: username, /* outros dados do usuário */ });
  };

  const { user } = useUser();

  return (
    <div>
      <label>
        Nome:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <button onClick={handleLogin}>Login</button>

      {user.name}
    </div>
  );
};

export default LoginComponent;