import { Button, Paper, Typography } from '@mui/material';
import AboutLinks from './AboutLinks';

function TitleBar({ changePage }) {

    const styles = {
        borderBottom: '2px solid white',
    }

    return (
        <Button variant="empty-title" style={{ color: 'white' }} onClick={() => changePage('home')}>
            <Typography variant='h4'>Riley Alexis</Typography>
            <Typography variant='h6'
                style={{
                    alignSelf: 'center',
                    marginLeft: 20,
                    marginTop: 5
                }}
            >Web Developer</Typography>
        </Button>
    )
}

export default TitleBar;