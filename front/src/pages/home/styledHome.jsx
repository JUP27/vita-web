import styled from "styled-components"

export const Fundo = styled.div`
    display: flex; 
    flex-direction: row; 
    padding: 30px;
    justify-content: space-around;
    align-items: center;
    height: 80.5vh; 
    /* background-color: #000;  */
`

export const Present = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: left;
    justify-content: center; 
    margin-top: 0px;
    gap: 20px;

`

export const SmallTitle = styled.div`
    word-break: normal; 
    align-items: left; 
    color: #FFF;
    font-family: Inter;
    font-size: 32px;
    width: 48vw;
`

export const Question = styled.div`
    align-items: left; 
    word-break: normal; 
    width: 40vw;
    color: #FFF;
    font-family: Levvic;
    font-size: 60px;
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    align-content: left;
    width: 42vw;
    height: 12vh;
    background-color: transparent;
    gap: 20px;
`

export const Purple = styled.button`
    justify-content: center;
    padding: 2px 2px 2px 2px; 
    width: 16vw;
    height: 8vh;
    color: #ffffff; 
    font-size: 28px;
    font-weight: 700;
    border-radius: 30px 0px;
    border: none; 
    background: #823C9E;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.40);

`