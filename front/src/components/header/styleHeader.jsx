import styled from 'styled-components'

export const Nav = styled.header`
    display: flex; 
    flex-direction: row; 
    justify-content: space-around; 
    align-items: center;
    height: 10vh; 
    background: #090909; 
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.60);
`

export const Caminhos = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    font-family: Inter;
    justify-content: space-around;

`
export const Navegar = styled.button`
    float: left;
    color: #f2f2f2;
    background: transparent;
    border: none;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 24px;

    button :hover{
        background-color: #C670E9;
        color: black;
        cursor: pointer;
    }
`

export const Logo = styled.img`
    justify-content: flex-start; 
    width: 180px;
    height: 60px;

`
