import { Grid } from '@mui/material'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { signUp } from '../../services/user'
import { useState } from 'react'
import { ErrorMessage, GradientButton, SButton } from './styled'

const SignUpForm = () => {
    const [ form, onChange, clear ] = useForm({username:'', email:'', password:''})
    const [ terms, setTerms ] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const onChangeTerms = (event) => {
        setTerms(!terms)
    }

    const navigate = useNavigate()

    const onSubmitForm = (event) => {
        event.preventDefault()
        
        if (!terms || !form.username || !form.email || !form.password) {
            setShowErrorMessage(true);
            return;
          }

          signUp(form, clear, navigate)
    };
    

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const handleButtonClick = () => {
        alert('Usuário cadastrado com sucesso!');
      };

    return (
      <>
        <form onSubmit={onSubmitForm}>
            <Grid
                container spacing={1}
                pl={5}
                pr={5}
                pt={5}
                pb={2}>
                <Grid item xs={12}>
                    <TextField
                    name={'username'}
                    id={"outlined-name"}
                    label={"Apelido"}
                    fullWidth
                    color={"primary"}
                    value={form.username}
                    onChange={onChange}
                    required/>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    name={'email'}
                    id="outlined-email"
                    label="E-mail"
                    fullWidth
                    color="primary"
                    type={'email'}
                    value={form.email}
                    onChange={onChange}
                    required/>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    name={'password'}
                    id="outlined-password"
                    label="Senha"
                    type='password'
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
                <p>Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade</p>
                <Grid
                    container spacing={2}>
                    <Grid item xs={2}>
                    <Checkbox {...label} value={terms} onChange={onChangeTerms}/>
                    </Grid>
                    <Grid item xs={10}>
                    <p>'Eu concordo em receber e-mails sobrer coisas legais no LabEddit'</p>
                    </Grid>
                </Grid>
                </Grid>
                <Grid 
                container spacing={0}
                pl={5}
                pr={5}
                pb={1}
                pt={3}>
                 {showErrorMessage && <ErrorMessage>Preencha todos os campos obrigatórios.</ErrorMessage>}

               <SButton>
                    <Grid container spacing={0}>
                    <GradientButton 
                        disabled={!terms || !form.username || !form.email || !form.password}
                        type={'submit'}
                        variant="outlined"
                        fullWidth
                        size="large"
                        onClick= {handleButtonClick}>
                        Cadastrar
                    </GradientButton>
                    </Grid>
                </SButton>
            </Grid>
            </form>
      </>
    )
  }
  
  export default SignUpForm 