import React, { useState } from 'react';
import { Button } from '@mui/material';
import { paraData } from '../modules/paraData';
import { AboutPara } from '../components/AboutPara';

export const VelvetScreen = () => {

    const openApp = () => {
        window.open('https://velvet.rileyalexis.com', '_blank');
    }
    const openSourceCode = () => {
        window.open('https://github.com/RileyAlexis/VelvetReact', '_blank');
    }

    return (
        <div className='appScreen'>
            <h2>Velvet</h2>
            <AboutPara textData={paraData.velvet} />
            <div className='appButtons'>
                <Button variant='empty' onMouseDown={openApp}>Open App</Button>
                <Button variant='empty' onMouseDown={openSourceCode}>View Source Code</Button>
            </div>
        </div>
    )
}