import React, { useState } from 'react';
import { Button } from '@mui/material';

export const AppButton = ({ buttonTitle }) => {
    const [isPressed, setIsPressed] = useState(false);

    if (isPressed) {
        return (
            <div>
                <Button onPress={() => setIsPressed(true)}>{buttonTitle}</Button>
            </div>
        )
    } else if (!isPressed) {
        <div>
            <Button onPress={() => setIsPressed(true)}>{buttonTitle}</Button>
        </div>

    }
}