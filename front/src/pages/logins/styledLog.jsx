import styled from 'styled-components'

export const Display = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center; 
    padding: 200px;
    height: 50vh; 
`

export const Card = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: flex-start; 
    justify-content: space-around;
    backdrop-filter: blur(8px);
    background: linear-gradient(135deg, rgba(255,255,255, 0.1), rgba(255,255,255, 0.02));
    padding: 20px; 
    width: 30vw;
    height: 55vh;
    border-radius: 5px; 

`

export const FormControl = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: space-around;
    gap: 14px;
`

export const FormHelperText = styled.text`
    margin: auto;
    align-items: left;
    color: #823C9E;
    font-size: 18px;
`
export const FormHelperText2 = styled.text`
    margin: auto;
    align-items: left;
    color: #fff;
    font-size: 16px;

    a {
        color: #823C9E;
        text-decoration: none;
        font-size: 16px;
    }

    a:hover {
        color: white;
    }
`

export const Entrar = styled.button`
    position: center;
    align-self: center;
    padding: 2px 2px 2px 2px; 
    width: 7vw;
    height: 5vh;
    color: #ffffff; 
    font-size: 20px;
    font-weight: 400;
    border: none; 
    background: #823C9E;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.40);

    button :hover{
        background-color: #C670E9;
        color: black;
    }
`


export const Navegar2 = styled.button`
    color: #823C9E;
    background: transparent;
    border: none;
    text-align: center;
    text-decoration: none;
    font-size: 16px;

    button :hover{
        color: #fff;
    }
`
export const Sair = styled.button`
    align-self: flex-end;
    width: 49px;
    height: 42px;
    border: none; 
    border-radius: 100%;
    background: transparent;
`
export const Sair2 = styled.img`
    width: 49px;
    height: 42px;
    align-self: center;
`

export const Titulo = styled.div`
    align-items: center;
    width: 28vw;
    color: #fff;
    text-align: center;
    font-family: Istok Web;
    font-size: 35px;
`
