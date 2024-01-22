import { useState } from 'react';
import { Stack, Typography, Paper, Button } from '@mui/material';

function DisplayApp({ image, link, source, about }) {
    const [isTextVisible, setIsTextVisible] = useState(false);
    const [showAbout, setShowAbout] = useState(false);

    const showText = () => {
        setIsTextVisible(true);
    };

    const hideText = () => {
        setIsTextVisible(false);
    };

    const toggleAbout = () => {
        setShowAbout(true);
    }

    return (
        // <Paper elevation={4}>
        <div
            style={{
                position: 'relative',
                width: '300px',
                height: '300px',
                background: `url("${image}") center/cover`,
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
                    <Button variant='empty' href={link} target="_blank">Open</Button>
                    {/* <Button variant='empty' onClick={() => toggleAbout()}>About</Button> */}
                    <Button variant='empty'
                        href={source} target="_blank">
                        Source
                    </Button>
                </Stack>
            </div>
        </div>
        // </Paper>
    );
};

export default DisplayApp;