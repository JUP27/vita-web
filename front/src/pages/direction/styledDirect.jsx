import styled from "styled-components"

export const Fundo = styled.div`
    display: flex; 
    flex-direction: row; 
    align-items: center; 
    justify-content: space-around; 
    background: #000; 
    height: 100vh;
`
export const Resumo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: justify;
`

export const Icons = styled.button`
    align-items: center; 
    padding: 2px; 
    width: 32px;
    height: 32px;
    background: none; 
    border-radius: 100px; 
    border: 2px solid #823C9E; 
`

export const Astronauta = styled.img`
    position: relative;
    align-self: left;
    width: 26vw;
    height: 75vh;

`