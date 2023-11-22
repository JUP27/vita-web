import React, {useState} from "react";
import search from '../../assets/search-icon.svg'
import { Barra, Fundo, Icone, Resultados } from "./styled";
import {Button, Input} from "@mui/material"

// const category = 'general'
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/hobbies?category=' + category,
//     headers: { 'X-Api-Key': 'IFiCt2YdEO9AmZsZ1hzsCg==Uvl1bC7cACmlClyl'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });


function SearchBar() {

    const [busca, setBusca] = useState("");
    
    const fetchData = (value) => {
        fetch('https://jsonplaceholder.org/posts')
        .then((response) => response.json())
        .then((json) => {
            const results = json.filter((posts) => {
                return(
                    value &&
                    posts &&
                    posts.busca.toLowerCase().includes(value)
                );  
            });
            console.log(results);
        });
    };

   
    // setResults(results)
   
    const handleChange = (value) => {
        setBusca(value);
        fetchData(value);
    }

    

    return(
        <Fundo>
            <Barra>
                <Icone src={search} alt="Icone de lupa, indicando busca"/>
                <Input placeholder="Qual hobby você procura?"
                    value={busca}
                    onChange={(ev) => handleChange(ev.target.value)}
                />
            </Barra>
            <Resultados/>
        </Fundo>
      
    );
};

export default SearchBar;

