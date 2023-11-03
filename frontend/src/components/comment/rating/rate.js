import { Input } from "@mui/material";
import { Avaliar, Campo, Fundo } from "./rateStyled";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function Comentar() {
    return(
        <Fundo>
            <h2>Sua opinião é muito importante para nós, 
                conta pra gente o que você acha desse hobbie
            </h2>
            <Campo>
                <Input placeholder="Adicionar um comentário ..."/>
            </Campo>
            <Avaliar>
                <p>Avaliar:</p>
                <Stack spacing={1}>
                    <Rating color="#823C9E" name="half-rating" defaultValue={0.5} precision={0.5} />
                </Stack>
            </Avaliar>
        </Fundo>
    );
}

export default Comentar; 