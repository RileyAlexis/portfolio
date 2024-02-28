import { Paper, Typography, Box } from "@mui/material";
import { paraData } from "../modules/paraData";
import { useState } from "react";
import { useEffect } from "react";

export function AboutPara({ showPara }) {

    const [textData, setTextData] = useState(paraData[showPara]);
    const paraStyle = {
        textAlign: 'left',
        margin: 20,
        marginBottom: '5px',
        textIndent: '2rem',
    }

    useEffect(() => {
        console.log(textData);
    })

    return (
        <Paper elevation={0} variant="textBlock">
            {textData.map((textItem) => (
                <Typography
                    style={paraStyle}>
                    {textItem}
                </Typography>
            ))}
        </Paper >
    )
}
