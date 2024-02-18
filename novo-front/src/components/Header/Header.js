import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { goToPostListPage, goToLoginPage } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/header-logo.svg'
import { HeaderBox, Img, StyledButton, StyledToolBar } from './styled'

const Header = () => {
  const navigate = useNavigate()
  // eslint-disable-next-line
  const token = localStorage.getItem('token')

  const logout = () => {
    localStorage.removeItem('token')
    goToLoginPage(navigate)
  }

  return (
    <HeaderBox>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <StyledToolBar>
            <Button onClick={() => goToPostListPage(navigate)} variant="h6" component="div">
              <Img src={Logo}/>
            </Button>
            <StyledButton  onClick={logout} color="inherit">Logout</StyledButton>
          </StyledToolBar>
        </AppBar>
      </Box>
    </HeaderBox>
  );
};

export default Header