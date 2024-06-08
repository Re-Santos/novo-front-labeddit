import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { GradientButton, PostField } from './styled';
import { Grid } from '@mui/material';
import { sendPost } from '../../services/post';
import useForm from '../../hooks/useForm';

const PostArea = (props) => {
    const [form, onChange, clear] = useForm({ body: '' });

    const onSubmitPost = async (event) => {
        event.preventDefault();
        try {
            const newPost = await sendPost(form, clear);
            props.newPost(newPost);
        } catch (error) {
            console.error('Erro ao postar:', error);
        }
    };

    return (
        <PostField>
            <form onSubmit={onSubmitPost}>
                <Box
                    sx={{
                        maxWidth: '100%',
                        backgroundColor: '#EDEDED',
                    }}
                >
                    <TextField
                        name={'body'}
                        id={"outlined-post"}
                        fullWidth
                        label={"Escreva seu post..."}
                        multiline
                        rows={5}
                        value={form.body}
                        onChange={onChange}
                        required
                    />
                </Box>
                <Grid
                    container spacing={0}
                    pb={2}
                    pt={2}
                >
                    <GradientButton
                        variant="contained"
                        fullWidth
                        size="large"
                        type={'submit'}
                    >
                        Postar
                    </GradientButton>
                </Grid>
            </form>
        </PostField>
    );
};

export default PostArea;
