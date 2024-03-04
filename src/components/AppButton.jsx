import React, { useState } from 'react';
import { Button, Stack, Grid } from '@mui/material';
import { useCallback } from 'react';

export const AppButton = ({ buttonTitle, source, application, textTitle, setPara }) => {
    const [isPressed, setIsPressed] = useState(false);

    const showOptions = useCallback(() => {
        if (!isPressed) {
            setPara(textTitle);
        } else {
            setPara('bio');
        }
        setIsPressed(prev => !prev);
        // console.log('setPara', setPara);
    }, [setPara]);

    return (
        <>
            <Button
                style={{ margin: 5 }}
                variant='empty-title' onMouseDown={showOptions}>{buttonTitle}</Button>
            {isPressed &&
                <Stack direction="column">
                    <Button variant='empty-small' href={source} target="_blank">Source</Button>
                    <Button variant='empty-small' href={application} target="_blank">Open</Button>
                </Stack>

            }
        </>
    );

}