import { useEffect, useRef, useState } from 'react';

import { Box, Grid, Paper, ThemeProvider, Stack, Divider } from '@mui/material';

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

//Themes
import { lightDefault } from './themes/defaultLight';

function App() {
  const [currentTheme, setCurrentTheme] = useState(lightDefault);
  const [page, setPage] = useState('home');


  useEffect(() => {
    document.body.style.backgroundColor =
    currentTheme.palette.background.default;
  }, []);

  const changePage = (target) => {
    setPage(target);
    console.log('Target:', target, 'Page:', page);
  }


  return (
    <ThemeProvider theme={lightDefault}>
      <center>
    <Box maxWidth={'70%'} style={{ padding: '0px', margin: '0px' }}>
      <Stack spacing={2} justifyContent={"center"} alignItems={"center"}>
        <TitleBar changePage={changePage} />
        <Divider style={{ padding: '1px', width: '70%' }} />
        <Navigation changePage={changePage}/>
        <AboutLinks />
        
        {page === 'home' &&
        <AboutPara />
        }

        {page === 'developer' && 
          <DisplayApp 
            image={"./assets/screens/roboticpicklefarm.jpg"} 
            source={"https://github.com/RileyAlexis/roboticPickleFarm"} />
        }

        {page === 'artist' && 
          <Artist />
        }
        



      </Stack>

     </Box>
     </center>
     </ThemeProvider>
  )
}

export default App;
