import { useNavigate } from "react-router-dom";
import { Fundo, PhotosArea, DivText, TextArea, Linha2, Photo, Atividade} from "./photosStyled";
import basquete from '../../assets/basquete.png'
import pescar from '../../assets/pescar.png'
import plantar from '../../assets/plantar.png'
import bola from '../../assets/futebol.png'
import ler from '../../assets/ler.png'
import observar from '../../assets/observar.png'
import Header from "../../components/header/header";
// import  SearchBar  from "../../components/search/searchBar";
// import ListaDeResultados from "../../components/search/searchResults";
// import { useState } from "react";

function Ranking() {
    const navigate = useNavigate();

    function goDescript() {
        navigate("/descricao")
    }

    // const [results, setResults] = useState([])


    return(
        <>
            <Header/>
            <Fundo>
                <PhotosArea>
                    <Linha2>
                        <Atividade>
                            <Photo src={basquete}  onClick={goDescript}/>
                        </Atividade>
                        <Atividade>
                            <Photo src={observar}  onClick={goDescript}/>
                        </Atividade>
                    </Linha2>
                    <Linha2>
                        <Atividade>
                            <Photo  src={pescar}  onClick={goDescript}/>
                        </Atividade>
                        <Atividade>
                            <Photo src={plantar}  onClick={goDescript}/>
                        </Atividade>
                    </Linha2>
                    <Linha2>
                        <Atividade>
                            <Photo src={bola}  onClick={goDescript}/>
                        </Atividade>
                        <Atividade>
                            <Photo src={ler}  onClick={goDescript}/>
                        </Atividade>
                    </Linha2>
                </PhotosArea>
                <TextArea>
                    <DivText>
                        <h2>Ranking</h2>
                        <p>Veja o que andam comentando sobre o top 6 de nossos hobbies</p>
                    </DivText>
                    {/* <SearchBar/> */}
                </TextArea>
            </Fundo>
        </>
    )
}

export default Ranking; 

// setResults={setResults}