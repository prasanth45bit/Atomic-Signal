import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './Feedback.css';

const feedbackData = [
    {
        id: 1,
        name: 'Samuel Guerrero',
        date: '31 Jan 2023, 01:31 PM',
        status: 'Very good',
        reason: 'Feedback reason will be displayed here',
        description: 'Your way of presenting the topic was very good in the client meeting',
    },
    {
        id: 2,
        name: 'Alicia Rodriguez',
        date: '5 Feb 2023, 10:15 AM',
        status: 'Needs Improvement',
        reason: 'Feedback reason will be displayed here',
        description: 'You could improve on your attention to detail in the documentation',
    },
];

const FeedbackCard = () => {
    return (
        <Box className="feedback-card">
            <Typography gutterBottom variant="h6">
                My open feedbacks
            </Typography>

            {feedbackData.map((feedback) => (
                <Box key={feedback.id} className="feedback-item">
                    <Box className="feedback-header">
                        <Typography variant="body1">
                            {feedback.name} - {feedback.date}
                        </Typography>
                        <Box className="feedback-status">{feedback.status}</Box>
                    </Box>
                    <Box className='feedback-mid'>
                    <Typography color="textSecondary">
                        {feedback.reason}
                    </Typography>
                    <Typography color="textSecondary" className="feedback-description">
                        {feedback.description}
                    </Typography>
                    </Box>
                <Box className='feed-button'>Submit your response</Box>
                </Box>
            ))}
        </Box>
    );
};

export default FeedbackCard;
