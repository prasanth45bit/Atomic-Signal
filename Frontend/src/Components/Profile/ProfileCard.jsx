import React from 'react';
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import logo from '../../assets/Logo.png'
import './ProfileCard.css';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import Person4Icon from '@mui/icons-material/Person4';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const ProfileCard = () => {
    return (
        <Box className="profile-card">
                <Box className='logo-info' position="relative">
                    <Box 
                        src={logo} 
                        alt="Profile Image" 
                        className="profile-avatar" 
                    />
                    <Box className="delete-icon">
                        <DeleteIcon color="error" />
                    </Box>
                </Box>
                
                <Box className='info'>
                    <Box className='nameExp'>
                        <Box>Jennifer</Box>
                        <Box className="experience-badge">
                            <Box>3 yrs 6 Mon</Box>
                        </Box>
                    </Box>
                    <Box className='Ext'>
                    <Box className='each'><Diversity3Icon/>Human Resources</Box>
                    <Box className='each'><Person4Icon/>Talent Manager</Box>
                    <Box className='each'><ManageAccountsIcon/>Samuel Guerrero</Box>
                    </Box>
                </Box>
        </Box>
    );
};

export default ProfileCard;
