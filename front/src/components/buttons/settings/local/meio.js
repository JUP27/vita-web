import { Middle } from "./styleLocal";
import localizacao from "../../../../assets/local.svg";


function Local() {
    return(
        <Middle>
            <img src={localizacao} alt="Pin de localização"/>
        </Middle>
    )
}

export default Local; 