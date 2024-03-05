import React, { useState } from "react";
import { paraData } from "../modules/paraData";
import { AboutPara } from "../components/AboutPara";


export const HomeScreen = () => {
    return (
        <div>
            <AboutPara textData={paraData.bio} />
        </div>
    );
}
