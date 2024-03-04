import React, { useState } from "react";

import { BottomNavigation, BottomNavigationAction } from "@mui/material";

export const MobileNav = ({ setPara }) => {

    const [value, setValue] = useState(0);
    const [isSelected, setIsSelected] = useState(false);

    return (
        <div>
            {isSelected &&
                <p>action</p>

            }
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    switch (newValue) {
                        case 0: setPara('pickles'); setIsSelected(true); return;
                        case 1: setPara('velvet'); setIsSelected(true); return;
                        case 2: setPara('bio'); setIsSelected(false); return;
                    }
                    console.log(newValue);
                }}
            >
                <BottomNavigationAction label="Robotic Pickle Farm" />
                <BottomNavigationAction label="Velvet" />
                <BottomNavigationAction label="About" />
            </BottomNavigation>
        </div>
    )
}