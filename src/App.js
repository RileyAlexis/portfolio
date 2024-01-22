import { useEffect, useState } from 'react';

//Material UI
import { Box, Grid, Paper, ThemeProvider, Stack, Divider } from '@mui/material';
import { useMediaQuery } from "@mui/material";

import './App.css';

import SceneComponent from './scenes/BasicScene';
import TvScene from './scenes/TvScene';

//Components
import TitleBar from './components/TitleBar';
import AboutPara from './components/AboutPara';
import Navigation from './components/Navigation';
import AboutLinks from './components/AboutLinks';
import DisplayApp from './components/DisplayApp';
import Artist from './components/Artist';
import Stacks from './components/Stacks';

//Themes
import { lightDefault } from './themes/defaultLight';

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

  const handleMouseOver = (page) => {
    console.log(page);
    setShowPara(page);
  }

  const handleMouseOut = () => {
    setShowPara('bio');
  }

  return (
    <ThemeProvider theme={lightDefault}>
      <center>
        <Box maxWidth={'70%'} style={{ padding: '0px', margin: '0px' }}>
          <Stack spacing={2} justifyContent={"center"} alignItems={"center"}>
            <TitleBar changePage={changePage} />
            <Divider style={{ padding: '1px', width: `${boxWidth}` }} />
            {/* <Navigation changePage={changePage} page={page} isSmallScreen={isSmallScreen} /> */}
            <AboutLinks />
          </Stack>

          <Grid container spacing={2} justifyContent={"space-around"} alignItems={"center"}>

            <Grid item component={AboutPara} xs={12} showPara={showPara} />
            <Grid item xs={12} sm={6} onMouseOver={() => handleMouseOver('pickles')} onMouseOut={handleMouseOut}>
              <DisplayApp
                image={"./assets/screens/roboticpicklefarm.jpg"}
                source={"https://github.com/RileyAlexis/roboticPickleFarm"}
                setShowPara={setShowPara}
              />
            </Grid>
            <Grid item xs={12} sm={6} onMouseOver={() => handleMouseOver('velvet')} onMouseOut={handleMouseOut}>
              <DisplayApp
                image={"./assets/screens/velvet.jpg"}
                source={"https://github.com/RileyAlexis/Velvet"}
                setShowPara={setShowPara}
              />
            </Grid>
            <Grid item xs={12}>
              <Stacks />
            </Grid>
            {page === 'artist' &&
              <Grid container direction={"row"} justifyContent={"center"}>
                <Artist />
              </Grid>
            }
          </Grid>
        </Box>
      </center>
    </ThemeProvider >
  )
}

export default App;
