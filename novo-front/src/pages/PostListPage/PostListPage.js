import React, { useEffect, useState } from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';
import Header from '../../components/Header/Header';
import PostArea from '../../components/PostArea/PostArea';
import PostList from '../../components/PostList/PostList';
import Container from '@mui/material/Container';

const PostListPage = () => {
  useProtectedPage();

  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPostList = () => {
    const token = localStorage.getItem('token');
    console.log('Token:', token); 
    
    axios.get(`${BASE_URL}/posts`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      setPostList(response.data);
      setLoading(false);
    })
    .catch((error) => {
      console.error('Error fetching posts:', error);
      alert('Ocorreu um erro ao buscar os posts. Por favor, tente novamente mais tarde.');
      setLoading(false);
    });
  };

  useEffect(() => {
    getPostList();
  }, []);

  const handleNewPost = (newPostData) => {
    setPostList([newPostData, ...postList]);
  };

  return (
    <>
      <Header />
      <Container maxWidth='md'>
        <PostArea newPost={handleNewPost} />
        {loading ? (
          <div>Carregando...</div>
        ) : (
          <PostList posts={postList} />
        )}
      </Container>
    </>
  );
};

export default PostListPage;
