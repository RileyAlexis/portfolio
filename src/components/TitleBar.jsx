import { Button, Paper, Typography } from '@mui/material';
import AboutLinks from './AboutLinks';

function TitleBar({ changePage }) {

    const styles = {
        borderBottom: '2px solid white',
    }

    return (
        <div class="titles-box">
            <h1 className='titleBar'>Riley Alexis</h1>
            <h2 className='subTitleBar'>Web Developer</h2>
        </div>
    )
}

export default TitleBar;