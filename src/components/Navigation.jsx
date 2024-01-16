import { useEffect, useState } from "react";

import { Paper, Typography, Button, Box } from "@mui/material";

function Navigation({ changePage, page, isSmallScreen }) {

        const [buttonSize, setButtonSize] = useState('empty');
        const [typoSize, setTypoSize] = useState('buttons');

        //Styling for || pipe dividers
        const divStyle = {
                transform: 'scaleY(2)',
                fontWeight: 'normal',
                display: 'inline',
                lineHeight: 0,
                padding: 0,
                margin: 0
        }

        useEffect(() => {
                console.log(buttonSize, isSmallScreen);
                if (isSmallScreen) {
                        setButtonSize('empty-small');
                        setTypoSize('buttons-small');
                } else if (!isSmallScreen) {
                        setButtonSize('empty');
                        setTypoSize('buttons');
                }
        }, []);

        return (
                <Paper elevation={0} style={{ width: '100%' }}>

                        {page !== 'home' &&
                                <>
                                        <Button variant={buttonSize} onClick={() => changePage('home')}>
                                                <Typography variant={typoSize} >
                                                        Home
                                                </Typography>
                                        </Button>
                                </>
                        }

                        <Button variant={buttonSize} onClick={() => changePage('developer')}>
                                <Typography variant={typoSize}>
                                        Developer
                                </Typography>
                        </Button>

                        {/* <Typography style={divStyle}>||</Typography>
                    <Button variant={buttonSize} onClick={() => changePage('artist')}> 
            <Typography variant={typoSize} >
                    Artist
            </Typography>
                    </Button> 
                <Typography style={divStyle}>||</Typography>
                    <Button variant={buttonSize} onClick={() => changePage('nerd')}>
            <Typography variant={typoSize}>
                    Nerd
            </Typography>
                    </Button>   */}

                </Paper>

        )
}

export default Navigation;