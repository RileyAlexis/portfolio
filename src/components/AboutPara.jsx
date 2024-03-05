import { Paper, Typography, Box } from "@mui/material";
import { paraData } from "../modules/paraData";
import { useState } from "react";
import { useEffect } from "react";

export function AboutPara({ textData }) {

    // const [textData, setTextData] = useState(paraData[showPara]);
    const paraStyle = {
        textAlign: 'left',
        margin: 20,
        marginBottom: '5px',
        textIndent: '2rem',
    }

    return (
        <div className="aboutPara">
            {textData.map((textItem, index) => (
                <Typography
                    key={index}
                    style={paraStyle}>
                    {textItem}
                </Typography>
            ))}
        </div>
    )
}
