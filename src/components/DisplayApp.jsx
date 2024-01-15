import { useState } from 'react';
import { Stack, CardContent, CardHeader, Typography, Paper, CardActions, CardMedia, Button } from '@mui/material';

function DisplayAppCardThingy() {
    const [isTextVisible, setIsTextVisible] = useState(false);

    const showText = () => {
      setIsTextVisible(true);
    };
  
    const hideText = () => {
      setIsTextVisible(false);
    };
  
    const buttonClick = (buttonNumber) => {
      alert(`Button ${buttonNumber} clicked!`);
    };

    return (
        <Paper elevation={2}>
            <div
                style={{
                    position: 'relative',
                    width: '300px',
                    height: '300px',
                    background: 'url("./assets/screens/pickles02.png") center/cover',
                    overflow: 'hidden',
                }}
                onMouseOver={showText}
                onMouseOut={hideText}
            >
                <div
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        width: '100%',
                        background: 'rgba(0, 0, 0, 0.7)',
                        color: '#fff',
                        padding: '20px',
                        boxSizing: 'border-box',
                        transform: isTextVisible ? 'translateY(0)' : 'translateY(100%)',
                        transition: 'transform 0.3s ease-out',
                    }}
                >
                    <Stack>
                    <Button variant='empty'>Play</Button>
                    <Button variant='empty'>About</Button>
                    <Button variant='empty'>Source</Button>
                    </Stack>
                </div>
            </div>
        </Paper>
    );
};

export default DisplayAppCardThingy;