import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import { HeaderBox, StyledToolBar, Img, StyledButton } from './styled'
import Button from '@mui/material/Button'
import { goToPostListPage, goToLoginPage } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/header-logo.svg'

const HeaderSignUp = () => {
  const navigate = useNavigate()

  return (
    <HeaderBox>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <StyledToolBar>
            <Button onClick={() => goToPostListPage(navigate)} variant="h6" component="div"> 
              <Img src={Logo}/>
            </Button>
            <StyledButton onClick={() => goToLoginPage(navigate)} color="inherit">Entrar</StyledButton>
          </StyledToolBar>
        </AppBar>
      </Box>
    </HeaderBox>
  );
};

export default HeaderSignUp