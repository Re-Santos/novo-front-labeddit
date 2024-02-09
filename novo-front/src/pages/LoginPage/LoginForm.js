import { Grid } from '@mui/material'
import TextField from '@mui/material/TextField'
import useForm from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { login } from '../../services/user'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import { GradientButton } from './LoginStyled'

const LoginForm = () => {
  const [ form, onChange, clear ] = useForm({email:'', password:''})

  useUnprotectedPage()
  const navigate = useNavigate();

  const onSubmitForm = (event) => {
    event.preventDefault()
    login(form, clear, navigate)
  };

    return (
        <form onSubmit={onSubmitForm}>
            <Grid
            container spacing={1}
            pl={5}
            pr={5}
            pt={5}
            pb={2}>
                <Grid item xs={12}>
                    <TextField
                    name={'email'}
                    type={'email'}
                    id={"outlined-name"}
                    label={"E-mail"}
                    fullWidth
                    color={"primary"}
                    value={form.email}
                    onChange={onChange}
                    required/>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    name={'password'}
                    id={"outlined-password"}
                    label={"Senha"}
                    type={'password'}
                    fullWidth
                    value={form.password}
                    onChange={onChange}
                    required/>
                </Grid>
            </Grid>
            <Grid 
              container spacing={0}
              pl={5}
              pr={5}
              pb={1}>
              <GradientButton 
                type={'submit'}
                variant="contained" 
                fullWidth
                size="large">
                Continuar
              </GradientButton>
            </Grid>
        </form>
    )
  }
  
  export default LoginForm