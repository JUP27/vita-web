import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { ButtonBack, ButtonAdd, Icon, ButtonSearch, Fundo } from './groupStyled';
import voltar from '../../assets/Back.svg';
import adicionar from "../../assets/Add.svg";
import pesquisa from "../../assets/Seacrch.svg";
import { useNavigate } from 'react-router-dom';


function ActionButtons() {
  const navegar = useNavigate()

  const goBack = () => {
    navegar(-1)
  } 

  const goSearch = () => {
    navegar('/search')
  }


  return (
    <Fundo>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab disabled aria-label="back">
          <ButtonBack onClick={goBack}>
            <Icon src={voltar}/>
          </ButtonBack>
        </Fab>
        <Fab disabled aria-label="add">
          <ButtonAdd>
            <Icon src={adicionar}/>
          </ButtonAdd>
        </Fab>
        <Fab disabled aria-label="search" onClick={goSearch}>
          <ButtonSearch>
            <Icon src={pesquisa}/>
          </ButtonSearch>
        </Fab>
      </Box>
    </Fundo>
  );
}

export default ActionButtons;