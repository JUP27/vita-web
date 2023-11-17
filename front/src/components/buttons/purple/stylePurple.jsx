import styled from 'styled-components'

export const Botao = styled.button`
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

    a{
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transition: .3s ease-in-out;
        transition: .3s ease-in-out;
    }

    a:hover{
        -webkit-transform: scale(1.3);
	    transform: scale(1.3);
    }

`