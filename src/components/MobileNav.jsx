import React, { useState } from "react";

import { Button, Paper } from "@mui/material";
import { useCallback } from "react";

export const MobileNav = ({ setPara }) => {

    const navStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '15px',
        position: 'static',
        bottom: '0%',
        height: 0,
        transition: 'height 0.5s ease-in-out'
    }

    const [value, setValue] = useState(0);
    const [isSelected, setIsSelected] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        if (value === 0) {
            window.open('https://picklefarm.rileyalexis.com', '_blank');
        } else if (value === 1) {
            window.open('https://velvet.rileyalexis.com', '_blank');
        }
    }

    const handleSource = () => {
        if (value === 0) {
            window.open('https://github.com/RileyAlexis/roboticPickleFarm', '_blank');
        } else if (value === 1) {
            window.open('https://github.com/RileyAlexis/Velvet', '_blank');
        }
    }

    const handleNav = (nav) => {
        setIsOpen(prev => !prev);
        if (!isOpen) {
            setValue(0);
            if (value === 1) setValue('pickles');
            if (value === 2) setValue('velvet');

        } else if (isOpen) {
            setValue(nav);
            setPara('bio');
        }
    }

    return (
        <div className="mobileNav">
            {isOpen &&
                <Paper style={navStyle}>
                    <Button variant="empty" onMouseDown={handleOpen}>Open App</Button>
                    <Button variant="empty" onMouseDown={handleSource}>Source Code</Button>
                </Paper>
            }
            <Paper style={{
                padding: '15px 0 20px 0',
                margin: 0,
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <Button variant="nav-button" onClick={() => setPara('bio')}>About</Button>
                <Button variant="nav-button" onClick={() => handleNav(0)}>Robotic Pickle Farm</Button>
                <Button variant="nav-button" onClick={() => handleNav(1)}>Velvet</Button>
            </Paper>
        </div>
    );
}