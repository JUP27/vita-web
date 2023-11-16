import { Fundo, PhotosArea, DivText, TextArea, Linha3, Photo } from "./photosStyled";
import ActionButtons from "../../components/actions/group";
import basquete from '../../assets/basquete.png'
import pescar from '../../assets/pescar.png'

function Ranking() {
    // const navegar = useNavigate();

    // function goDescript() {
    //     navegar("/descrição")
    // }

    return(
        <Fundo>
            <PhotosArea>
                <Linha3>
                    <Photo src={basquete}/>
                    <Photo src={pescar}/>
                    <Photo/>
                </Linha3>
                <Linha3>
                    <Photo/>
                    <Photo/>
                    <Photo/>
                </Linha3>
            </PhotosArea>
            <TextArea>
                <DivText>
                    <h2>Ranking</h2>
                    <p>Veja o que andam comentando sobre o top 6 de nossos hobbies</p>
                </DivText>
                <ActionButtons/>
            </TextArea>
        </Fundo>
    )
}

export default Ranking; 