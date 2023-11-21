import { useNavigate } from "react-router-dom";
import { Caminhos, Logo, Nav, Navegar } from "./styleHeader";
import myLogo from '../../assets/logo-vitta.svg'

function Header() {
    const navigate = useNavigate();

    function goAbout() {
        navigate("/sobre")
    }

    function goHome() {
        navigate("/")
    }

    function goRanking() {
        navigate("/ranking")
    }

    function goProfile() {
        navigate("/profile")
    }

    function goOrient() {
        navigate("/orientacao")
    }

    return(
        <>
            <Nav>
                <Logo src={myLogo}/>
                <Caminhos>
                    <Navegar onClick={goHome}>Home</Navegar>
                    <Navegar onClick={goOrient}>Orientação</Navegar>
                    <Navegar onClick={goRanking}>Ranking</Navegar>
                    <Navegar onClick={goProfile}>Perfil</Navegar>
                    <Navegar onClick={goAbout}>Sobre</Navegar>
                </Caminhos>
            </Nav>
        </>
    )
};

export default Header; 