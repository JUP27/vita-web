import styled from "styled-components";

export const CardPerfil = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding-top: 30px;
    width: 24vw;
    height: 45vh;
    background: #1A1A1A;
    border: 3px solid #823C9E;
    border-radius: 5px;
    gap: 18px;
`

export const Foto = styled.img`
    width: 9vw;
    height: 20vh;
    border-radius: 160px;
`

export const Infos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const NomeDoUsuario = styled.text`
    color: #FFF;
    text-align: center;
    font-family: Istok Web;
    font-size: 42px;
    font-weight: 400;
`

export const EmailDoUsuario = styled.text`
    color: #FFF;
    text-align: center;
    font-family: Istok Web;
    font-size: 28px;
    font-weight: 400;
`