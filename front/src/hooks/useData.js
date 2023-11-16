import { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useForm } from './useForm';
import {api} from '../services/api'

export const useData = (initialForm, path) => {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [form, onChangeForm] = useForm(initialForm);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${api}${path}`, form)
            .then(response => {
                if (response.data.token) {
                    // window.localStorage.setItem('token', response.data.token);
                    localStorage.setItem('token', response.data.token);
                    setMessage(response.data.message);
                    alert(response.data.message);
                    navigate('/');
                } else if(response.data.message) {                 
                    setMessage("Usuário já cadastrado");
                }
            })
            .catch(error => {
                if (error.response && error.response.status === 401) {
                    setMessage("Opa, credenciais inválidas. Verifique seu email e senha.");
                } else {
                    setMessage("Verifique a conexão com a API.");
                }
            });
    };

   

    return {
        form: form,
        onChangeForm: onChangeForm,
        handleSubmit: handleSubmit,
        message: message
    };
}