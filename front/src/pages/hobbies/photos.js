// import { useNavigate } from "react-router-dom";
import { Fundo, PhotosArea, DivText, TextArea, Linha2, Photo } from "./photosStyled";
// import ActionButtons from "../../components/actions/group";
import basquete from '../../assets/basquete.png'
import pescar from '../../assets/pescar.png'
import plantar from '../../assets/plantar.png'
import bola from '../../assets/futebol.png'
import ler from '../../assets/ler.png'
import observar from '../../assets/observar.png'
import Header from "../../components/header/header";

function Ranking() {
    // const navegar = useNavigate();

    // function goDescript() {
    //     navegar("/descrição")
    // }

    // onClick={goDescript}

    return(
        <>
            <Header/>
            <Fundo>
                <PhotosArea>
                    <Linha2>
                        <Photo src={basquete} />
                        <Photo src={observar} />
                    </Linha2>
                    <Linha2>
                        <Photo  src={pescar} />
                        <Photo src={plantar} />
                    </Linha2>
                    <Linha2>
                        <Photo src={bola} />
                        <Photo src={ler} />
                    </Linha2>
                </PhotosArea>
                <TextArea>
                    <DivText>
                        <h2>Ranking</h2>
                        <p>Veja o que andam comentando sobre o top 6 de nossos hobbies</p>
                    </DivText>
                    {/* <ActionButtons/> */}
                </TextArea>
            </Fundo>
        </>
    )
}

export default Ranking; 