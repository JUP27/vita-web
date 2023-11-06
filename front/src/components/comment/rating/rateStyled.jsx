import styled from 'styled-components'

export const Fundo = styled.div`
    height: 100vh;
    background-color: #000;
    align-items: center;
    justify-content: space-evenly;
    padding: 60px;
    /* gap: 12px; */


    h2{
        color: #e5e5e5;
        font-family: Livvic;
        text-align: left;
        /* falta quebrar linha */
    }
`

export const Avaliar = styled.div`
    display: flex;
    flex-direction: column;
    color: #e5e5e5;
    font-family: Livvic;
    font-size: 22px;
`

export const Campo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 2vh;
    border-radius: 20px;
    border: none; 
    height: 40px;
    width: 280px;
    background-color: #eee;
    color: #000;
    box-shadow: 0.5px 0.5px 6px #C670E9;

`