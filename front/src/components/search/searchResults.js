import { Hobby } from "./searchResults";
import { Resultados } from "./searchResults";

function ListaDeResultados({results}) {
    return(
        <Resultados>
            {results.map((result, id) => {
                return <Hobby key={id} onClick={(e) = alert(`Ir para ${result.name}`)}>{results.name}</Hobby>
            })}

        </Resultados>
    )
};

export default ListaDeResultados; 