import styled from 'styled-components'

export const Fundo = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center; 
    padding: 200px;
    background-color: #1a1a1a;
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

export const Titulo = styled.div`
    align-items: center;
    width: 28vw;
    color: #fff;
    text-align: center;
    font-family: Istok Web;
    font-size: 35px;
`
