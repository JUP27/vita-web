import styled from 'styled-components'

export const Fundo = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: center;
    justify-content: space-between;
    background: #000;
    color: #fff;
`
export const PhotosArea = styled.div`
    display: flex; 
    flex-direction: row;
    width: 70vw;
    height: 92.5vh;

`
export const Photo = styled.img`
    position: fixed;
    width: 312px;
    height: 512px;

`
export const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: 92.5vh;
    padding: 30px;
    align-items: center;
`

export const DivText = styled.div`
    /* color: #FFF; */
    text-align: center;
    font-family: Livvic;
    font-size: 28px;
    
    
    h2{
        font-size: 60px;
    }
`