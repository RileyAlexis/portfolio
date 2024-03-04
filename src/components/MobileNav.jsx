import React, { useState } from "react";

import { Button, Paper } from "@mui/material";
import { useCallback } from "react";

export const MobileNav = ({ setPara }) => {

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

    const handleNav = useCallback(() => {

        setIsOpen(prev => !prev);

        return () => {
            setIsOpen(false);
        }
    }, [isSelected])

    return (
        <div className="mobileNav">
            {isOpen &&
                <Paper style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    padding: '10px',
                }}>
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
                <Button variant="nav-button" onClick={() => handleNav(0)}>About</Button>
                <Button variant="nav-button" onClick={() => handleNav(0)}>Robotic Pickle Farm</Button>
                <Button variant="nav-button" onClick={() => handleNav(0)}>Velvet</Button>
            </Paper>
        </div>
    )
}