import { Grid } from "@mui/material";
import DisplayApp from "./DisplayApp";
import { useState, useEffect, useRef } from "react";

function AppsPage({ page, setShowPara, showPara }) {

    const grid1Ref = useRef(null);
    const grid2Ref = useRef(null);

    const applyBorder = {
        border: '2px solid pink',
        margin: '0px'
    }
    const disableBorder = {
        border: 'none',
        margin: '2px'
    }
    const [appStyle, setAppStyle] = useState(disableBorder);
    const [appStyle2, setAppStyle2] = useState(disableBorder);


    const handleMouseDown = (event) => {
        if (grid1Ref.current && grid1Ref.current.contains(event.target)) {
            setAppStyle(applyBorder);
            setAppStyle2(disableBorder)
            setShowPara('pickles');
        }
        if (grid2Ref.current && grid2Ref.current.contains(event.target)) {
            setAppStyle(disableBorder);
            setAppStyle2(applyBorder);
            setShowPara('velvet');

        }
    }

    useEffect(() => {
        const handleClickAway = (event) => {
            if (grid1Ref.current && !grid1Ref.current.contains(event.target) && !grid2Ref.current.contains(event.target)) {
                setAppStyle(disableBorder);
                setShowPara('bio');

            }
            if (grid2Ref.current && !grid2Ref.current.contains(event.target) && !grid1Ref.current.contains(event.target)) {
                setAppStyle2(disableBorder);
                setShowPara('bio');

            }
        }
        document.addEventListener('click', handleClickAway);
        return () => {
            document.removeEventListener('click', handleClickAway);
        }

    });

    return (
        <>
            <Grid item onClick={(event) => handleMouseDown(event)}>
                <Grid item ref={grid1Ref} style={appStyle}>
                    <DisplayApp
                        link={"https://picklefarm.rileyalexis.com"}
                        image={"./assets/screens/roboticpicklefarm.jpg"}
                        source={"https://github.com/RileyAlexis/roboticPickleFarm"}
                    />
                </Grid>
            </Grid>
            <Grid item onClick={(event) => handleMouseDown(event)}>
                <Grid item ref={grid2Ref} style={appStyle2}>
                    <DisplayApp
                        linke={"https://velvet.rileyalexis.com"}
                        image={"./assets/screens/velvet.jpg"}
                        source={"https://github.com/RileyAlexis/Velvet"}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default AppsPage;