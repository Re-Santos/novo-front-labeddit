 import React from 'react';
import { Posts, EnviadoPor, Texto, DivBottom, Carregando, DivComentarios, DivEngajamento } from './styled';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import { goToPostDetailPage } from '../../routes/coordinator';
import { createPostVote, changePostVote, deletePostVote } from '../../services/votes';
import { arrowUpColor, arrowDownColor } from '../../helpers/arrowHelper';

const PostList = ({ posts, usersList }) => {
    const navigate = useNavigate();

    const updateVote = async (voto, id, userVote) => {
        try {
            let updatedUserVote = null;

            if (userVote === null) {
                await createPostVote(id, voto);
                updatedUserVote = voto;
            } else if (userVote === 1 && voto === 1) {
                await deletePostVote(id);
            } else if (userVote === -1 && voto === -1) {
                await deletePostVote(id);
            } else if (userVote === 1 && voto === -1) {
                await changePostVote(id, -1);
                updatedUserVote = -1;
            } else if (userVote === -1 && voto === 1) {
                await changePostVote(id, 1);
                updatedUserVote = 1;
            }

            console.log(voto, id, updatedUserVote);
        } catch (error) {
            console.error('Error updating vote:', error);
        }
    };

    return (
        <>
            {posts.length > 0 ? (
                posts.map((post, index) => (
                    <Posts key={post.id ? post.id : index}>
                        <EnviadoPor>Enviado por: {post.userId ? getUsernameById(post.userId, usersList) : 'Usuário Desconhecido'}</EnviadoPor>
                        <Texto onClick={() => goToPostDetailPage(navigate, post.id, post)}>{post.content}</Texto>
                        <DivBottom>
                            <DivEngajamento>
                                <ArrowUpwardIcon
                                    style={{ color: arrowUpColor(post.userVote) }}
                                    fontSize="small"
                                    onClick={() => updateVote(1, post.id, post.userVote)}
                                />
                                <p>{post.likes === null ? '0' : post.likes}</p>
                                <ArrowDownwardIcon
                                    style={{ color: arrowDownColor(post.userVote) }}
                                    fontSize="small"
                                    onClick={() => updateVote(-1, post.id, post.userVote)}
                                />
                            </DivEngajamento>
                            <DivComentarios onClick={() => goToPostDetailPage(navigate, post.id, post)}>
                                <ChatBubbleOutlineIcon color="fifth" fontSize="small" />
                                <p>{post.comment === null ? '0' : post.comment}</p>
                            </DivComentarios>
                        </DivBottom>
                    </Posts>
                ))
            ) : (
                <Carregando>
                    <CircularProgress color="primary" />
                </Carregando>
            )}
        </>
    );
};

export default PostList;

// Função para obter o nome de usuário pelo ID
const getUsernameById = (userId, usersList) => {
    if (!userId || !usersList || usersList.length === 0) return 'Usuário Desconhecido';
    const user = usersList.find(user => user.id === userId);
    return user ? user.username : 'Usuário Desconhecido';
};
