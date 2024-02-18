import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { GradientButton, PostField } from './styled'
import { Grid } from '@mui/material'
import useForm from '../../hooks/useForm'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { sendComment } from '../../services/comment'

const Comments = (props) => {
  const [ form, onChange, clear ] = useForm({body:''})
  const params = useParams()
  const { state } = useLocation()

  const navigate = useNavigate()

  const onSubmitComment = (event) => {
    event.preventDefault()
    sendComment(form, clear, navigate, params.id, state)
    props.enviaComentario()
  }

    return (
        <PostField>
          <form onSubmit={onSubmitComment}>
            <Box
              sx={{
                maxWidth: '100%',
                backgroundColor: '#EDEDED', 
              }}
            >
              <TextField 
                fullWidth 
                label="Escreva seu comentário..." 
                id="outlined-comment" 
                name={'body'}
                value={form.body}
                onChange={onChange}
                multiline
                rows={5}
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
                type='submit'
              >
                Comentar
              </GradientButton>
            </Grid>
          </form>
        </PostField>
    )
  }
  
  export default Comments