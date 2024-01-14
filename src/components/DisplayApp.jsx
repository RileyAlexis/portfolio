import { useState } from 'react';
import { Card, CardContent, CardHeader, Typography, Paper, CardActions, CardMedia, Button } from '@mui/material';

function DisplayAppCardThingy() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }
    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <div>
        <Card onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <CardMedia component="img" height="240" image="./assets/screens/pickles02.png" alt="Robot Pickle Farm Screen Cap"
            style={{ filter: isHovered ? 'brightness(70%)' : 'brightness(100%)' }} />
            <CardContent>
                <Typography variant='h6' component="div">
                    Robotic Pickle Farm
                </Typography>
                <Typography variant='caption'>
                    A pickling clicker game
                </Typography>

                {isHovered && (
                    <div>
                        <Button variant='contained' color="primary">
                            Play
                        </Button>
                        <Button variant='contained' color="primary">
                            About    
                        </Button>
                        <Button variant='contained' color="primary">
                            Source
                        </Button>
                    </div>
                )}
            </CardContent>
            
        </Card>
        </div>
    );
};

export default DisplayAppCardThingy;