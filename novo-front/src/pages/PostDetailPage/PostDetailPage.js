import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Container from '@mui/material/Container';
import Header from '../../components/Header/Header';
import PostDetail from '../../components/PostDetail/PostDetail';
import Comments from '../../components/Comments/Comments';
import CommentsList from '../../components/CommentsList/CommentsList';
import useProtectedPage from '../../hooks/useProtectedPage';
import { BASE_URL } from '../../constants/urls';

const PostDetailPage = () => {
  const params = useParams();
  const [postData, setPostData] = useState({});
  const [comments, setComments] = useState([]);

  const getComments = useCallback(() => {
    axios
      .get(`${BASE_URL}/posts/${params.id}/comments`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert('Ocorreu um erro, tente novamente');
      });
  }, [params.id]); // Adicione params.id ao array de dependências

  useEffect(() => {
    axios
      .get(`${BASE_URL}/posts/${params.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        setPostData(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert('Ocorreu um erro, tente novamente');
      });
    getComments();
  }, [params.id, getComments]);

  const atualizaListaComentarios = useCallback(() => {
    setTimeout(() => {
      getComments();
    }, 2000);
  }, [getComments]);

  useProtectedPage();

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <PostDetail post={postData} />
        <Comments enviaComentario={atualizaListaComentarios} />
        <CommentsList listaComentario={comments} sendVote={atualizaListaComentarios} />
      </Container>
    </>
  );
};

export default PostDetailPage;
