import React, {useState} from "react";
import search from '../../assets/search-icon.svg'
import { Barra, Fundo, Icone, Resultados } from "./styled";
import {Input} from "@mui/material"


const hobies = [
    'basquete',
    'volêi',
    'pescaria',
    'basquete aquatico',
    'volêi de praia',
    'pescaria selvagem'
]; 


export const SearchBar = () => {
    
    const [busca, setBusca] = useState("");
    
    const match = hobies.filter((hobby) => hobby.toLowerCase().includes(busca.toLowerCase()));

    return(
        <Fundo>
            <Barra>
                <Icone src={search}/>
                <Input placeholder="Qual hobby você procura?"
                    value={busca}
                    onChange={(ev) => setBusca(ev.target.value)}
                />
            </Barra>
            <Resultados>
            <ul>
                {match.map((hobby) => (
                    <ul key={hobby}>{hobby}</ul>
                ))}
            </ul>
            </Resultados>
        </Fundo>
      
    );
};