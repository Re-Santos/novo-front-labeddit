import axios from 'axios';
import { BASE_URL } from '../constants/urls';

export const sendPost = (body, clear) => {
    const bodyPayload = {
        name: localStorage.getItem('username'),
        content: body.body,
    };

    return axios
        .post(`${BASE_URL}/posts`, bodyPayload, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
        .then((response) => {
            clear();
            const postData = response.data.post;
            return {
                id: postData.id,
                content: postData.content,
                userId: localStorage.getItem('userId'), 
                userVote: null,
                likes: 0,
                comment: 0,
            };
        })
        .catch((error) => {
            console.error('Erro ao criar post:', error);
            alert(error.response.data.message);
            throw error;
        });
};
