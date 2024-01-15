import { Stack, Grid, Typography, Button } from "@mui/material";
import { i } from "devicon";

function Stacks() {
    return (
        <Grid container spacing={{ xs: 1, sm: 2 }} justifyContent={"center"}>
            <Grid item>
                <Grid item>
                    <Button variant="empty-small" href="https://reactjs.org" target="_blank">
                        <i className="devicon-react-original" style={{ padding: '5px' }}></i>
                        <Typography variant={"buttons"}>React</Typography>
                    </Button>

                    <Button variant="empty-small" href="https://redux.js.org" target="_blank">
                        <i className="devicon-redux-original" style={{ padding: '5px' }}></i>
                        <Typography variant={"buttons"}>Redux</Typography>
                    </Button>

                    <Button variant="empty-small" href="https://nodejs.org" target="_blank">
                        <i className="devicon-nodejs-plain" style={{ padding: '5px' }}></i>
                        <Typography variant={"buttons"}>Node</Typography>
                    </Button>

                    <Button variant="empty-small" href="https://www.postgresql.org" target="_blank">
                        <i className="devicon-postgresql-plain" style={{ padding: '5px' }}></i>
                        <Typography variant={"buttons"}>PostGres</Typography>
                    </Button>

                    <Button variant="empty-small" href="https://expressjs.com" target="_blank">
                        <i className="devicon-express-original" style={{ padding: '5px' }}></i>
                        <Typography variant={"buttons"}>Express</Typography>
                    </Button>

                    <Button variant="empty-small" href="https://git-scm.com" target="_blank">
                        <i className="devicon-git-plain" style={{ padding: '5px' }}></i>
                        <Typography variant={"buttons"}>Git</Typography>
                    </Button>

                    <Button variant="empty-small" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                        <i className="devicon-css3-plain" style={{ padding: '5px' }}></i>
                        <Typography variant={"buttons"}>CSS</Typography>
                    </Button>

                    <Button variant="empty-small" href="https://mui.com" target="_blank">
                        <i className="devicon-materialui-plain" style={{ padding: '5px' }}></i>
                        <Typography variant={"buttons"}>Material UI</Typography>
                    </Button>

                    <Button variant="empty-small" href="https://www.linux.org" target="_blank">
                        <i className="devicon-linux-plain" style={{ padding: '5px' }}></i>
                        <Typography variant={"buttons"}>Linux</Typography>
                    </Button>

                    <Button variant="empty-small" href="https://httpd.apache.org" target="_blank">
                        <i className="devicon-apache-plain" style={{ padding: '5px' }}></i>
                        <Typography variant={"buttons"}>Apache</Typography>
                    </Button>
                </Grid>
            </Grid>
        </Grid>

    )
};

export default Stacks;