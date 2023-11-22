import styled from "styled-components"

export const Fundo = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: space-around; 
    /* background: #000;  */
    /* height: 100vh; */
`
export const Sessao1 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center; 
    justify-content: space-around; 
    margin-top: 20px;
    margin-bottom: 80px;
`

export const Resumo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
`
export const Textos = styled.text`
    align-self: center;
    padding: 10px 10px 10px 0px;
    width: 70vw;
    word-break: normal; 
    text-align: justify; 
    line-height: 1.2;
    color: #FFF;
    font-family: Inter;
    font-size: 28px;
`
export const Icons = styled.img`
    align-items: center; 
    padding: 4px 4px 4px 4px; 
    margin: auto;
    width: 44px;
    height: 44px;
    background: none; 
    border-radius: 2px 2px 2px 2px;

`

export const Astronauta = styled.img`
    position: relative;
    align-self: left;
    width: 26vw;
    height: 75vh;
`