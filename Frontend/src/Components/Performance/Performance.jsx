import React from 'react';
import { Box, Typography } from '@mui/material';
import './Performance.css';

const PerformanceDashboard = () => {
    const performanceData = [
        { label: 'Communication', values: ['green', 'yellow', 'yellow', 'green', 'green'] },
        { label: 'Efficiency', values: ['green', 'green', 'yellow', 'yellow', 'yellow'] },
        { label: 'Time Management', values: ['yellow', 'yellow', 'green', 'green', 'gray'] },
        { label: 'Delivery', values: ['green', 'green', 'green', 'green', 'green'] },
        { label: 'Unavailability', values: ['red', 'orange', 'gray', 'gray', 'gray'] },
    ];

    return (
        <Box className="performance-dashboard">
            <Typography variant="h6" className="performance-title">Performance</Typography>
            <Box className="gauge-container">
                <Box className="gauge">
                    <Box className="needle"></Box>
                </Box>
                <Typography variant="subtitle1" className="overall-text">Overall</Typography>
                <Typography variant="subtitle2" className="status-text">Need to improve</Typography>
            </Box>
            <Box className="performance-matrix">
                {performanceData.map((item, index) => (
                    <Box key={index} className="matrix-row">
                        <Typography variant="body2" className="metric-label">{item.label[0]}</Typography>
                        <Typography variant="body2" className="metric-name">{item.label}</Typography>
                        <Box className="dots-container">
                            {item.values.map((color, idx) => (
                                <Box key={idx} className={`dot ${color}`}></Box>
                            ))}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default PerformanceDashboard;
