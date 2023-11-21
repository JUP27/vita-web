import styled from 'styled-components';

export const Fundo = styled.div`
    display: flex; 
    flex-direction: row; 
    align-items: center; 
    justify-content: space-around; 
    background: #000; 
    height: 95vh;
`

export const Direita = styled.div`
    align-items: center; 
    padding: 30px; 
`

export const Esquerda = styled.div`
    display: flex; 
    flex-direction: column;
    width: 60vw;
    gap: 30px; 
`

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: left; 
    color: #FFF;
    border-bottom: 2px solid #C670E9;
    /* border-height: max-content; */
    font-family: Levvic;
    font-size: 42px;
    gap: 10px;

`

export const Text = styled.div`
    max-width: 50vw;
    text-align: justify; 
    line-height: 1.2;
    color: #FFF;
    font-family: Inter;
    font-size: 28px;
`

export const Foto = styled.img`
    width: 24vw;
    height: 78vh;
    border-radius: 60px 0px;
`