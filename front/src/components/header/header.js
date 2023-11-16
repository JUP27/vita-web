import { useNavigate } from "react-router-dom";
import { Caminhos, Logo, Nav } from "./styleHeader";

function Header() {
    const navigate = useNavigate();

    function goAbout() {
        navigate("/about")
    }

    function goHome() {
        navigate("index")
    }

    function goRanking() {
        navigate("/ranking")
    }

    function goProfile() {
        navigate("/profile")
    }

    function goOrient() {
        navigate("/orientação")
    }

    return(
        <>
            <Nav>
                <Logo/>
                <Caminhos>
                    <a onClick={goHome}>Home</a>
                    <a onClick={goOrient}>Formulário</a>
                    <a onClick={goRanking}>Ranking</a>
                    <a onClick={goProfile}>Perfil</a>
                    <a onClick={goAbout}>Sobre</a>
                </Caminhos>
            </Nav>
        </>
    )
};

export default Header; 