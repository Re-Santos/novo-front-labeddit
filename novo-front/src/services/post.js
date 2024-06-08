import axios from 'axios';
import { BASE_URL } from '../constants/urls';

export const sendPost = async (body, clear) => {
    const bodyPayload = {
        name: localStorage.getItem('username'),
        content: body.body,
    };

    try {
        const response = await axios.post(`${BASE_URL}/posts`, bodyPayload, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        
        // Adiciona log para verificar a resposta completa
        console.log('Resposta da API:', response);

        // cria um objeto de post simulado baseado no payload enviado, já que a resposta não contém os dados esperados
        if (response.status === 201 && response.data === "Post criado com sucesso") {
            clear();
            return {
                id: new Date().getTime().toString(), // Usa um timestamp como ID simulado
                content: body.body,
                userId: localStorage.getItem('userId'),
                userVote: null,
                likes: 0,
                comment: 0,
            };
        } else {
            throw new Error('Resposta inesperada do servidor');
        }
    } catch (error) {
        console.error('Erro ao criar post:', error);
        alert(error.response ? error.response.data.message : error.message);
        throw error;
    }
};
