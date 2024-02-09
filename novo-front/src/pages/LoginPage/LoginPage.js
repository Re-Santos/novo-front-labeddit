import Logo from '../../assets/main-logo.svg'
import HorizontalLineThick from '../../assets/horizontal-line-thick.svg'
import { Grid } from '@mui/material'
// import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { goToSignUpPage } from '../../routes/coordinator'
import Container from '@mui/material/Container'
import LoginForm from './LoginForm'
import { ContaButton, FooterLineImage, FooterLineImageContainer, LButton, LogoLogin, Title } from './LoginStyled'

const LoginPage = () => {

  const navigate = useNavigate()

    return (
        <Container maxWidth='xs'>
          <Title>
            <LogoLogin src={Logo} alt='Logo do LabEddit'/>
           
            <p>O projeto de rede social da Labenu</p>
            <LoginForm/>
          </Title>
          <LButton>
            <Grid container spacing={0}>
              <ContaButton 
                type={'submit'}
                variant="outlined"
                fullWidth
                size="large"
                onClick={() => goToSignUpPage(navigate)}>
                Crie uma conta!
              </ContaButton>
            </Grid>
          </LButton>
          <FooterLineImageContainer>
              <FooterLineImage src={HorizontalLineThick} alt="Thicker Horizontal line" />
          </FooterLineImageContainer>

        </Container>
    )
  }
  
  export default LoginPage