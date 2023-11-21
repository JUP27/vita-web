import { useNavigate } from "react-router-dom";
import { Card, Fundo, Titulo, FormHelperText, FormHelperText2, FormControl} from "./styledLog";
import { Input } from '@chakra-ui/react'
import Saida from "../../components/buttons/exit/sair";
import Entrar from "../../components/buttons/send/sendButton";
import { useState } from "react";

function Login() {
    const navigate = useNavigate();

    function goCadastro() {
        navigate('/cadastro')
    }

    function goHome() {
      navigate("/")
  }

    const goBack = () => {
        navigate(-1)
      } 

    const [username, setUsername] = useState('');
    
    return(
        <Fundo>
            <Card>
                <Saida onClick={goBack}/>
                <FormControl>
                    <Titulo>Login</Titulo>
                    <Input type='email' placeholder="Email"/>
                    <Input type='password' placeholder="Senha"/>
                    <FormHelperText>Não lembro minha senha</FormHelperText>
                    <Entrar mensage={"Entrar"} onClick={goHome}/>
                    <FormHelperText2>Ainda não possui um cadastro? 
                        <a href='cadastro.js' onClick={goCadastro}>Cadastre-se</a>
                    </FormHelperText2>
                </FormControl>
            </Card>
        </Fundo>
    )
};

export default Login; 

// import React, { useState } from 'react';
// import { useUser } from './UserContext';

// const LoginComponent = () => {
//   const { login } = useUser();
//   const [username, setUsername] = useState('');

//   const handleLogin = () => {
//     // Realizar a lógica de login (por exemplo, chamar uma API para autenticar o usuário)
//     // e passar as informações do usuário, incluindo o nome, para a função de login
//     login({ name: username, /* outros dados do usuário */ });
//   };

//   const { user } = useUser();

//   return (
//     <div>
//       <label>
//         Nome:
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </label>
//       <button onClick={handleLogin}>Login</button>

//       {user.name}
//     </div>
//   );
// };

// export default LoginComponent;