import styled from 'styled-components'

export const Nav = styled.header`
    display: flex; 
    flex-direction: row; 
    justify-content: space-around; 
    align-items: center;
    height: 70px; 
    background: #000; 
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.60);
`

export const Caminhos = styled.div`
    text-align: center;
    font-family: Inter;

    a {
        float: left;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 24px;
    }

    a:hover {
        background-color: #C670E9;
        color: black;
    }
`

export const Logo = styled.img`
    justify-content: flex-start; 
    width: 80px;
    height: 60px;
    border: 2px solid #fff; 
`
