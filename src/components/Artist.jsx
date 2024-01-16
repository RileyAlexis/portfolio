import { Grid, Typography } from "@mui/material";
import ImageBox from "./ImageBox";

function Artist() {

    return (
        <>
        {/* <Typography>Write things Here</Typography> */}
        <ImageBox image={"./assets/arts/untold.HEIC"} data={"Graphite Drawing"} />
        <ImageBox image={"./assets/arts/suitcases.HEIC"} data={"Graphite Drawing"} />
        <ImageBox image={"./assets/arts/por01.jpg"} data={"Silver photograph"} />
        <ImageBox image={"./assets/arts/sands.jpg"} data={"Silver Photograph"} />
        <ImageBox image={"./assets/arts/duluthflower.jpg"} data={"Digital Photograph"} />

        </>
    )
};

export default Artist;