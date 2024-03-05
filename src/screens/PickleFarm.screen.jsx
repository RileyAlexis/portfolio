import React, { useState } from 'react';
import { paraData } from '../modules/paraData';
import { AboutPara } from '../components/AboutPara';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const PickleFarmScreen = () => {
    return (
        <div>
            <AboutPara textData={paraData.pickles} />
        </div>
    );
}