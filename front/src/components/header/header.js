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
                    <a href="home.js" onClick={goHome}>Home</a>
                    <a href="direct.js" onClick={goOrient}>orientação</a>
                    <a href="photo.js" onClick={goRanking}>Ranking</a>
                    <a href="profileOfc.js" onClick={goProfile}>Perfil</a>
                    <a href="about.js" onClick={goAbout}>Sobre</a>
                </Caminhos>
            </Nav>
        </>
    )
};

export default Header; 