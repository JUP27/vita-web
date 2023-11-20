import { useNavigate } from "react-router-dom";
import { Fundo, PhotosArea, DivText, TextArea, Linha2, Photo } from "./photosStyled";
import basquete from '../../assets/basquete.png'
import pescar from '../../assets/pescar.png'
import plantar from '../../assets/plantar.png'
import bola from '../../assets/futebol.png'
import ler from '../../assets/ler.png'
import observar from '../../assets/observar.png'
import Header from "../../components/header/header";
import { SearchBar } from "../../components/search/searchBar";
import ListaDeResultados from "../../components/search/searchResults";

function Ranking() {
    const navegar = useNavigate();

    function goDescript() {
        navegar("/descrição")
    }

    const [results, setResults] = useState([])


    return(
        <>
            <Header/>
            <Fundo>
                <PhotosArea>
                    <Linha2>
                        <Photo src={basquete}  onClick={goDescript}/>
                        <Photo src={observar}  onClick={goDescript}/>
                    </Linha2>
                    <Linha2>
                        <Photo  src={pescar}  onClick={goDescript}/>
                        <Photo src={plantar}  onClick={goDescript}/>
                    </Linha2>
                    <Linha2>
                        <Photo src={bola}  onClick={goDescript}/>
                        <Photo src={ler}  onClick={goDescript}/>
                    </Linha2>
                </PhotosArea>
                <TextArea>
                    <DivText>
                        <h2>Ranking</h2>
                        <p>Veja o que andam comentando sobre o top 6 de nossos hobbies</p>
                    </DivText>
                    <SearchBar setResults={setResults}/>
                    <ListaDeResultados/>
                </TextArea>
            </Fundo>
        </>
    )
}

export default Ranking; 