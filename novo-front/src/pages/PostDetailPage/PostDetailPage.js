import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios';
import Container from '@mui/material/Container';
import Header from '../../components/Header/Header';
import PostDetail from '../../components/PostDetail/PostDetail';
import Comments from '../../components/Comments/Comments';
import CommentsList from '../../components/CommentsList/CommentsList';
import useProtectedPage from '../../hooks/useProtectedPage';
// import { BASE_URL } from '../../constants/urls';
import postDetails from '../../data/postDetails.json';


const PostDetailPage = () => {
  
  const params = useParams();

  const [postData, setPostData] = useState(postDetails);//adicionei para usar os mockups(Renata)

  const [comments, setComments] = useState([]);

  const getComments = useCallback(() => {
    // alterei para usar mockup, enquanto não corrigi erro de post na api(Renata)
    //   .get(`${BASE_URL}/posts/${params.id}/comments`, {
    //     headers: {
    //       Authorization: localStorage.getItem('token'),
    //     },
    //   })
    //   .then((success) => {
    //     setComments(success.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     alert('Ocorreu um erro, tente novamente');
    //   });

    // Use os dados locais em vez da chamada da API
    setComments(postData.comments);
  }, [postData]); //removi params.id do array de depêndências, pq não estou usando a api e sim o mockup(Renata)

  useEffect(() => {
    getComments();
  }, [getComments]);

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
        <PostDetail />
        <Comments enviaComentario={atualizaListaComentarios} />
        <CommentsList listaComentario={comments} sendVote={atualizaListaComentarios} />
      </Container>
    </>
  );
};

export default PostDetailPage;
