import { Campos } from "./styledCadastro";
import { Card, Display, Entrar, FormControl, Sair, Sair2, Titulo } from "./styledLog";
import { useData } from "../../hooks/useData";
import { useTokenNotNull } from "../../hooks/useTokenNotNull";
import bye from "../../assets/exit.svg"
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";


function Cadastro() {
    const {form, onChangeForm, handleSubmit, message} = useData({username:'', password:'', email:'', estado:'', idade:'', hobby:''},'/user/cadastro');
    const navigate = useNavigate();

    useTokenNotNull();

    function goHome() {
        navigate("/")
    }

    return (
        <Display>
        <Card>
            <Sair>
                <Sair2 src={bye} onClick={goHome}/>
            </Sair>
            <FormControl onSubmit={handleSubmit}>
                <Titulo>Cadastro</Titulo>
                <Campos>
                    <TextField  id="outlined-basic" 
                        label="Email" variant="outlined"
                        value={form.email}
                        onChange={onChangeForm}
                    />
                    <TextField  id="outlined-basic" 
                        label="Senha" variant="outlined"
                        value={form.password}
                        onChange={onChangeForm}
                    />
                    <TextField  id="outlined-basic" 
                        label="Estado" variant="outlined" 
                        value={form.estado}
                        onChange={onChangeForm}
                    />
                </Campos>
                <Campos>
                    <TextField  id="outlined-basic" 
                        label="Nome" variant="outlined"
                        value={form.username}
                        onChange={onChangeForm}
                    />
                    <TextField  id="outlined-basic" 
                        label="Idade" variant="outlined" 
                        value={form.idade}
                        onChange={onChangeForm}
                    />
                    <TextField  id="outlined-basic" 
                        label="Hobby Atual" variant="outlined"
                        value={form.hobby}
                        onChange={onChangeForm}
                    />
                    {message &&  <p>{message} </p>}
                </Campos>
                <Entrar type="submit">Salvar</Entrar>
            </FormControl>

            {}
        </Card>
    </Display>
    )

}

export default Cadastro; 