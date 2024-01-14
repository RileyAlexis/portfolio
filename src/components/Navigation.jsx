import { Paper, Typography, Button, Divider } from "@mui/material";

function Navigation({changePage}) {
    
    //Styling for || pipe dividers
    const divStyle = {
        transform: 'scaleY(2)',
        fontWeight: 'normal',
        display: 'inline',
        lineHeight: 0,
        padding: 0,
        margin: 0
    }

    return (
        <Paper elevation={0} style={{ width: '100%'}}>
                <Button variant="empty" onClick={() => changePage('developer')}>
            <Typography variant="buttons">
                    Developer
            </Typography>
                    </Button>
                <Typography style={divStyle}>||</Typography>
                    <Button variant="empty" onClick={() => changePage('artist')}> 
            <Typography variant="buttons" >
                    Artist
            </Typography>
                    </Button> 
                <Typography style={divStyle}>||</Typography>
                    <Button variant="empty" onClick={() => changePage('nerd')}>
            <Typography variant="buttons">
                    Nerd
            </Typography>
                    </Button>  
                   
        </Paper>
        
    )
}

export default Navigation;