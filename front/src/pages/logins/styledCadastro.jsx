import styled from 'styled-components'

export const Campos = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center; 
    justify-content: space-around;
    gap: 12px;

`

export const Card = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: flex-start; 
    justify-content: space-around;
    backdrop-filter: blur(8px);
    background: linear-gradient(135deg, rgba(255,255,255, 0.1), rgba(255,255,255, 0.02));
    padding: 20px; 
    width: 45vw;
    height: 60vh;
    border-radius: 5px; 

`