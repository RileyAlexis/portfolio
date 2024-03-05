import React, { useState } from 'react';
import { paraData } from '../modules/paraData';
import { AboutPara } from '../components/AboutPara';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';

export const PickleFarmScreen = () => {

    const openApp = () => {
        window.open('https://picklefarm.rileyalexis.com', '_blank');
    }
    const openSourceCode = () => {
        window.open('https://github.com/RileyAlexis/roboticPickleFarm', '_blank');
    }

    return (
        <div className='appScreen'>
            <h2>Robotic Pickle Farm</h2>
            <AboutPara textData={paraData.pickles} />
            <div className='appButtons'>
                <Button variant='empty' onMouseDown={openApp}>Open App</Button>
                <Button variant='empty' onMouseDown={openSourceCode}>View Source Code</Button>
            </div>
        </div>
    );
}