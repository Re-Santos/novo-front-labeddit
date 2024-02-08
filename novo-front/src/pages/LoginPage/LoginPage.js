import Logo from '../../assets/main-logo.svg'
import { Grid } from '@mui/material'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { goToSignUpPage } from '../../routes/coordinator'
import Container from '@mui/material/Container'
import LoginForm from './LoginForm'
import { LButton, LogoLogin, Title } from './LoginStyled'

const LoginPage = () => {

  const navigate = useNavigate()

    return (
        <Container maxWidth='xs'>
          <Title>
            <LogoLogin src={Logo} alt='Logo do LabEddit'/>
            <h1>LabEddit</h1>
            <p>O projeto de rede social da Labenu</p>
            <LoginForm/>
          </Title>
          <LButton>
            <Grid container spacing={0}>
              <Button 
                type={'submit'}
                variant="outlined"
                fullWidth
                size="large"
                onClick={() => goToSignUpPage(navigate)}>
                Crie uma conta!
              </Button>
            </Grid>
          </LButton>
        </Container>
    )
  }
  
  export default LoginPage