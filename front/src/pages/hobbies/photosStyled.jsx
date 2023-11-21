import styled from 'styled-components'

export const Fundo = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: center;
    justify-content: space-between;
    background: #000;
    color: #fff;
    height: 90.5vh;

`
export const PhotosArea = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: flex-start;

`
export const Linha2 = styled.div`
    display: grid;
    flex-direction: column;
    margin: 0;
  
`

export const Photo = styled.img`
    width: 242px;
    height: 333px;
`

export const Atividade = styled.button`
    background: transparent;
    border: none;
    width: 242px;
    height: 333px;
    -webkit-filter: blur(0);
	filter: blur(0);

    button:hover{
        -webkit-filter: blur(3px);
	    filter: blur(3px);
	    -webkit-transition: .3s ease-in-out;
	    transition: .3s ease-in-out;
    }
`
export const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 90px 190px 0px 0px;
    width: 26vw;
   
`

// export const Pesquisando = styled.div`
//     display: flex;
//     /* justify-content: flex-end; */
//     /* justify-self: end; */
// `
export const DivText = styled.div`
    text-align: center;
    font-family: Livvic;
    font-size: 28px;
    
    h2{
        font-size: 60px;
    }
`
