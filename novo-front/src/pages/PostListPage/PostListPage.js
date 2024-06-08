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
    const [usersList, setUsersList] = useState([]);
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
            setPostList(response.data.reverse()); // Inverte a ordem dos posts para exibir o mais recente no topo
            setLoading(false);
        })
        .catch((error) => {
            console.error('Erro ao buscar posts:', error);
            alert('Ocorreu um erro ao buscar os posts. Por favor, tente novamente mais tarde.');
            setLoading(false);
        });
    };

    const getUserList = () => {
        axios.get(`${BASE_URL}/users/all`)
        .then((response) => {
            setUsersList(response.data.users);
        })
        .catch((error) => {
            console.error('Erro ao buscar usuários:', error);
            alert('Ocorreu um erro ao buscar os usuários. Por favor, tente novamente mais tarde.');
        });
    };

    useEffect(() => {
        getPostList();
        getUserList();
    }, []);

    const handleNewPost = (newPostData) => {
        console.log('Adicionando novo post:', newPostData);
        setPostList(prevPostList => [newPostData, ...prevPostList]);
    };

    return (
        <>
            <Header />
            <Container maxWidth='md'>
                <PostArea newPost={handleNewPost} />
                {loading ? (
                    <div>Carregando...</div>
                ) : (
                    <PostList posts={postList} usersList={usersList} />
                )}
            </Container>
        </>
    );
};

export default PostListPage;
