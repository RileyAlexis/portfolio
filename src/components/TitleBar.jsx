import { Button, Paper, Typography } from '@mui/material';
import AboutLinks from './AboutLinks';

function TitleBar({changePage}) {
    return (
        <Paper elevation={0}>
            <Button variant="empty" onClick={() => changePage('home')}>
           <Typography variant='h4'>Riley Alexis</Typography>
           </Button>
        </Paper>
    )
}

export default TitleBar;