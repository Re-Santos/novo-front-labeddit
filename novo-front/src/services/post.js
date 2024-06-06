import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import { goToPostListPage } from '../routes/coordinator';

export const sendPost = (body, clear, navigate) => {
  const bodyPayload = {
    name: localStorage.getItem('username'),
    content: body.body,
  };

  axios
    .post(`${BASE_URL}/posts`, bodyPayload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((success) => {
      clear();
      goToPostListPage(navigate);
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};
