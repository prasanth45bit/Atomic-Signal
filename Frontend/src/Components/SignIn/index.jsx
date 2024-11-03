import React, { useState } from 'react';
import { Box, Typography, Link } from '@mui/material';
import Button from '../Button/Button';
import Input from '../Inputs/Input';
import Logo from '../../assets/Logo.png';
import { useNavigate } from 'react-router-dom'; 
import './SignIn.css';

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate(); 

    const handleSignUp = () => {
        navigate('/Profile'); 
    };

    return (
        <Box className="signup-page">
            <Box className="signup-card">
                <Box className='top'>
                    <Box className='logo'><img className='logo-img' src={Logo} alt="Logo" /></Box>
                    <Box className='sign'>
                        <Box className='signup'>Sign up</Box>
                        <Box className='signup-text'>You're just a few details away to set up a culture of feedback and thriving environment</Box>
                    </Box>
                    <Box className='buttons'>
                        <button className='btn'>Sign up with Google</button>
                        <button className='btn'>Sign up with Outlook</button>
                    </Box>
                </Box>
                <Box className='buttom'>
                    <Box className='sperate'>
                        <Box sx={{ width: '2px', height: '1px', width: '140px', backgroundColor: 'gray', margin: '0 10px', }} />
                        <Box>or</Box>
                        <Box sx={{ width: '2px', height: '1px', width: '140px', backgroundColor: 'gray', margin: '0 10px', }} />
                    </Box>
                    <Box className='Input-component'>
                        <Input
                            label="Work Email *"
                            placeholder="youremail@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Box>
                    <Button  text="Sign Up" type="primary" navi="/Profile" />
                    <Box>
                        Already have an account? <Link href="/Profile" color="primary">Log in</Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default SignUpPage;
