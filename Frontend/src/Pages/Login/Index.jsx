import React, { useState } from 'react';
import { Box } from '@mui/material';
import './Login.css'
import back from '../../assets/background.png'
import SignUpPage from '../../Components/SignIn';

function LoginPage() {
 

  return (
    <Box className='Loginpage'>
    <img className='back-image'src={back}/>
     <Box className='Login-components'><SignUpPage/></Box>
    </Box>
  )
}

export default LoginPage