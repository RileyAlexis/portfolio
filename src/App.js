import { useEffect, useState } from 'react';

//Material UI
import { Box, Grid, Paper, ThemeProvider, Stack, Divider } from '@mui/material';
import { useMediaQuery } from "@mui/material";

import './App.css';


//Components
import TitleBar from './components/TitleBar';
import AboutPara from './components/AboutPara';
import AboutLinks from './components/AboutLinks';
import Stacks from './components/Stacks';

//Themes
import { lightDefault } from './themes/defaultLight';
import AppsPage from './components/AppsPage';

function App() {
  const [currentTheme, setCurrentTheme] = useState(lightDefault);
  const [page, setPage] = useState('home');
  const [boxWidth, setBoxWidth] = useState('70%');
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [showPara, setShowPara] = useState('bio');

  useEffect(() => {
    document.body.style.backgroundColor =
      currentTheme.palette.background.default;

    if (isSmallScreen) {
      setBoxWidth('100%');
    } else if (!isSmallScreen) {
      setBoxWidth('70%');
    }

  }, []);

  const changePage = (target) => {
    setPage(target);
    console.log('Target:', target, 'Page:', page);
  }

  return (
    <ThemeProvider theme={lightDefault}>
      <center>
        <Box maxWidth={'100%'} style={{ padding: '0px', margin: '0px' }}>
          <Grid container spacing={2} justifyContent={'space-around'}>
            <Grid item xs={12}>
              <TitleBar changePage={changePage} />
              <Divider style={{ padding: '1px', width: `${boxWidth}` }} />
            </Grid>
            <center>
              <Grid item xs={12}>
                <AboutLinks />
              </Grid>
            </center>
          </Grid>

          <Grid container spacing={2} justifyContent={"space-around"}>
            <Grid container item md={6} maxHeight={'75%'} style={{ padding: '5px', marginTop: '20px', marginLeft: '10px', overflow: 'scroll' }}>
              <Grid item>
                <AboutPara showPara={showPara} />
              </Grid>
            </Grid>

            <Grid container item md={5} gap={2} xs={6}>
              <AppsPage setShowPara={setShowPara} page={page} showPara={showPara} />

            </Grid>
          </Grid>



          <Grid item xs={12}>
            <Stacks />
          </Grid>


        </Box>
      </center>
    </ThemeProvider >
  )
}

export default App;
