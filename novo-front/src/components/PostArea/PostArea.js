import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { GradientButton, PostField } from './styled'
import { Grid } from '@mui/material'
import { sendPost } from '../../services/post'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'

const PostArea = (props) => {
  const [ form, onChange, clear ] = useForm({body:''})

  const navigate = useNavigate()

  const onSubmitPost = (event) => {
    event.preventDefault()
    sendPost(form, clear, navigate)
    props.newPost(form); //(aqui estamos passando os dados do novo post para a função newPost)
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
    )
  }
  
  export default PostArea