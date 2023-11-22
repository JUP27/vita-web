import styled from "styled-components";

export const Display = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    margin: 20px 50px 20px 20px;
    gap: 12px;
`
export const HobbieName = styled.div`
    display: flex;
    flex-direction: row; 
    align-items: center; 
    font-family: Livvic;
    color: #fff;
    font-size: 58px;
    font-weight: 400;
    gap: 20px;

`
export const Text2 = styled.div`
    text-align: justify; 
    line-height: 1.2;
    color: #FFF;
    font-family: Inter;
    font-size: 26px;
`

export const FooterComentario = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 26vh;
`

export const Titles = styled.text`
    color: #FFF;
    font-family: Livvic;
    font-size: 40px;
    font-weight: 400;
`

export const HobbieFoto = styled.img`
    width: 5vw;
    height: 6vw; 
    border-radius: 50px;
`