// import { useNavigate } from "react-router-dom";
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

    function goForm() {
        navigate("/formulário")
    }

    return(
        <>
            <Nav>
                <Logo/>
                <Caminhos>
                    <a onClick={goHome}>Home</a>
                    <a onClick={goForm}>Formulário</a>
                    <a onClick={goRanking}>Ranking</a>
                    <a onClick={goProfile}>Perfil</a>
                    <a onClick={goAbout}>Sobre</a>
                </Caminhos>
            </Nav>
        </>
    )
};

export default Header; 