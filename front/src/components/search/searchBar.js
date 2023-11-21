import React, {useState} from "react";
import search from '../../assets/search-icon.svg'
import { Barra, Fundo, Icone, Resultados } from "./styled";
import {Button, Input} from "@mui/material"
import {Drawer,DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure} from '@chakra-ui/react'
import { ButtonSearch, Icon } from "../actions/groupStyled";
import pesquisa from "../../assets/Seacrch.svg";


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


function SearchBar({setResults}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement] = React.useState('right')

    const [busca, setBusca] = useState("");
    
    const Buscando = (value) => {
        // fetch('https://api.api-ninjas.com/v1/hobbies?category='+ category)
        fetch('https://api.api-ninjas.com/v1/hobbies?category=')
        .then((response) => response.json())
        .then((json) => {
            const results = json.filter((hobby) => {
                return(
                    value &&
                    hobby &&
                    hobby.busca.toLowerCase().includes(value)
                );  
            });
            setResults(results)
        });
    };

    const handleChange = (value) => {
        setBusca(value);
        Buscando(value);
    }
    

    return(
        <Fundo>
            <Button onClick={onOpen}>
                <ButtonSearch>
                    <Icon src={pesquisa}/>
                </ButtonSearch>
            </Button>
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerBody>
                        <Barra>
                            <Icone src={search} alt="Icone de lupa, indicando busca"/>
                            <Input placeholder="Qual hobby você procura?"
                                    value={busca}
                                    onChange={(ev) => handleChange(ev.target.value)}
                            />
                            </Barra>
                            <Resultados/>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Fundo>
      
    );
};

export default SearchBar;