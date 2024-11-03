import React from 'react';
import { Box, Typography, Avatar, Button } from '@mui/material';
import Sidebar from '../../Components/Navbar/Navbar';
import './Profile.css';
import PerformanceDashboard from '../../Components/Performance/Performance';
import FeedbackCard from '../../Components/Feedback/Feedback';
import ProfileCard from '../../Components/Profile/ProfileCard';


const ProfilePage = () => {
    return (
        <Box className="profile-page">
            <Box className='Nav'><Sidebar/></Box>
            <Box className="profile-main">
                <Box className="profile-section">
                    <Box className="profile">
                        <ProfileCard/>
                    </Box>
                    <Box className="performance-section">
                    <PerformanceDashboard/>
                </Box>
                </Box>
               
                <Box className="feedback">
                    <FeedbackCard/>
                    </Box>
            </Box>
        </Box>
    );
};

export default ProfilePage;
