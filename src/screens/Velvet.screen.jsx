import React, { useState } from 'react';
import { paraData } from '../modules/paraData';
import { AboutPara } from '../components/AboutPara';

export const VelvetScreen = () => {
    return (
        <AboutPara textData={paraData.velvet} />
    )
}