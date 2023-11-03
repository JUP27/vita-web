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
    align-items: center; 
    justify-content: space-around;
    backdrop-filter: blur(8px);
    background: linear-gradient(135deg, rgba(255,255,255, 0.1), rgba(255,255,255, 0.02));
    padding: 40px; 
    width: 38vw;
    height: 40vh;
    border-radius: 10px; 

`

export const Card2 = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: end;
    width: 620px;
    height: 50px; 
`

export const Texto = styled.div`
    align-items: center;
    width: 28vw;
    color: #fff;
    text-align: center;
    font-family: Istok Web;
    font-size: 45px;
`
