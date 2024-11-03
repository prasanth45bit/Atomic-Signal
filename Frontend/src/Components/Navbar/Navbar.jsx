import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FeedbackIcon from '@mui/icons-material/Feedback';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import GroupsIcon from '@mui/icons-material/Groups';
import Person2Icon from '@mui/icons-material/Person2';
import './Navbar.css';

const Sidebar = () => {
    const [selectedIcon, setSelectedIcon] = useState('profile');
    const navigate = useNavigate();

    const handleIconClick = (iconName, route) => {
        setSelectedIcon(iconName);
        navigate(route);
    };

    return (
        <Box className="sidebar">
            <Box className="nav-text">
                <Box className='logoimg'></Box>
                <Box  className="version">V1.0.0.2</Box>
            </Box>
            <Box className="icons-container">
            <Box className='icon-set'>
            <Box className='set'>
            <Box
                    className={`icon ${selectedIcon === 'profile' ? 'active' : ''}`}
                    onClick={() => handleIconClick('profile', '/profile')}
                    
                >
                    <Person2Icon />
                </Box>
                <Box className="version">Profile</Box>
                </Box>
                <Box className='set'>
                <Box
                    className={`icon ${selectedIcon === 'team' ? 'active' : ''}`}
                    onClick={() => handleIconClick('team',)}
                >
                    <GroupsIcon />
                </Box>
                <Box className="version">Team</Box>
                </Box>
                <Box className='set'>
                <Box
                    className={`icon ${selectedIcon === 'feedback' ? 'active' : ''}`}
                    onClick={() => handleIconClick('feedback')}
                >
                    <FeedbackIcon />
                </Box>
                <Box className="version">Feedback</Box>
                </Box>
                </Box>
                <Box className='icon-set2'>
                <Box
                    className={`icon ${selectedIcon === 'settings' ? 'active' : ''}`}
                    onClick={() => handleIconClick('settings')}
                >
                    <SettingsIcon />
                </Box>
                <Box
                    className={`icon ${selectedIcon === 'notification' ? 'active' : ''}`}
                    onClick={() => handleIconClick('notification')}
                >
                    <NotificationsIcon />
                </Box>
                <Box
                    className={`icon ${selectedIcon === 'logout' ? 'active' : ''}`}
                    onClick={() => handleIconClick('logout', '/')}
                >
                    <LogoutIcon style={{color:'red'}}/>
                </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Sidebar;
