import { useState } from 'react';
import { Stack, Button, useMediaQuery, Typography } from '@mui/material';

function DisplayApp({ image, link, source }) {
    const [isTextVisible, setIsTextVisible] = useState(false);
    const isSmallScreen = useMediaQuery("(max-width: 600px)");

    const showText = () => {
        setIsTextVisible(true);
    };

    const hideText = () => {
        setIsTextVisible(false);
    };

    if (!isSmallScreen) {
        return (
            <div
                style={{
                    position: 'relative',
                    width: '200px',
                    height: '200px',
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
        );
    } else return (
        <div
            style={{
                position: 'relative',
                width: '200px',
                height: '200px',
                background: `url("${image}") center/cover`,
                overflow: 'hidden',
            }}
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
    )
};

export default DisplayApp;