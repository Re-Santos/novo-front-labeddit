import HeaderSignUp from '../../components/Header/HeaderSignUp'
import HorizontalLineThick from '../../assets/horizontal-line-thick.svg'
import { Title, Body, FooterLineImageContainer, FooterLineImage } from './styled'
import Container from '@mui/material/Container'
import SignUpForm from './SignUpForm'

const SignUpPage = () => {

    return (
      <>
        <HeaderSignUp/>
          <Container maxWidth='xs'>
            <Title>Olá, boas vindas ao LabEddit;)</Title>
            <Body>
                <SignUpForm/>
            </Body>
            <FooterLineImageContainer>
                <FooterLineImage src={HorizontalLineThick} alt="Thicker Horizontal line" />
            </FooterLineImageContainer>
          </Container>
      </>
    );
  };
  
  export default SignUpPage