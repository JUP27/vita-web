import { BotaoConfig } from "./styleSet";
import key from "../../../../assets/key.svg";

function Chave() {
    return(
        <>
            <BotaoConfig>
                <img src={key} alt="Icone de chave"/>
            </BotaoConfig>
        </>
        
    )
}

export default Chave; 