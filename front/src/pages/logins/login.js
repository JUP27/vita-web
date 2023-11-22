import { useNavigate } from "react-router-dom";
import { Card, Titulo, FormHelperText, FormHelperText2, FormControl, Entrar, Navegar2, Sair, Sair2, Display} from "./styledLog";
import { useData } from "../../hooks/useData";
import { useTokenNotNull } from "../../hooks/useTokenNotNull";
import bye from "../../assets/exit.svg"
import { TextField } from "@mui/material";


function Login() {
    const navigate = useNavigate();

    function goCadastro() {
        navigate('/cadastro')
    }

    function goHome() {
      navigate("/")
    }


    const {form, onChangeForm, handleSubmit, message} = useData({email:'', password:''},'/user/login');

    useTokenNotNull()

    
    return(
        <Display>
            <Card>
                <Sair>
                    <Sair2 src={bye}/>
                </Sair>
                <FormControl onSubmit={handleSubmit}>
                    <Titulo>Login</Titulo>
                    <TextField  id="outlined-basic" label="Email" variant="outlined" 
                        value={form.email}
                        onChange={onChangeForm}
                    />
                    <TextField  id="outlined-basic" label="Senha" variant="outlined" 
                        value={form.password}
                        onChange={onChangeForm}
                    />
                    <FormHelperText>Não lembro minha senha</FormHelperText>
                    <Entrar onClick={goHome}>Entrar</Entrar>
                    <FormHelperText2>Ainda não possui um cadastro? 
                        <Navegar2 onClick={goCadastro}>Cadastre-se</Navegar2>
                    </FormHelperText2>
                    {message &&  <p>{message} </p>}
                </FormControl>
            </Card>
        </Display>
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