import styled from "styled-components"

export const Fundo = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: space-around; 
    background: #000; 
    /* height: 100vh; */
`
export const Sessao1 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center; 
    justify-content: space-around; 
`

export const Resumo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 12px;
    gap: 20px;
`
export const Textos = styled.text`
    padding: 10px 10px 10px 10px;
    word-break: normal; 
    text-align: justify; 
    line-height: 1.2;
    color: #FFF;
    font-family: Inter;
    font-size: 28px;
`
export const Icons = styled.img`
    color: #fff;
    align-items: center; 
    padding: 4px 4px 4px 4px; 
    margin: auto;
    width: 44px;
    height: 44px;
    background: none; 
    border-radius: 2px 2px 2px 2px;
    /* border: 2px solid #823C9E;  */
`

export const Astronauta = styled.img`
    position: relative;
    align-self: left;
    width: 26vw;
    height: 75vh;
`