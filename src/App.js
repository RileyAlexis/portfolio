import { useEffect, useState } from 'react';

//Material UI
import { Grid, ThemeProvider, Stack } from '@mui/material';
import { useMediaQuery } from "@mui/material";

import './App.css';

//Components
import TitleBar from './components/TitleBar';
import { AboutPara } from './components/AboutPara';
import AboutLinks from './components/AboutLinks';
import Stacks from './components/Stacks';
import AppsPage from './components/AppsPage';
import { CodeDisplay } from './components/CodeDisplay';

//Themes
import { lightDefault } from './themes/defaultLight';

import { codeData } from './modules/codeData';

function App() {
  const [currentTheme, setCurrentTheme] = useState(lightDefault);
  const [page, setPage] = useState('home');
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [codeIndex, setCodeIndex] = useState(0);

  useEffect(() => {
    document.body.style.backgroundColor =
      currentTheme.palette.background.default;
  }, []);

  useEffect(() => {
    const setResize = () => {
      setCodeIndex(() => isSmallScreen ? 0 : 1)
    }

    window.addEventListener('resize', setResize);

    return () => {
      window.removeEventListener('resize', setResize);
    }
  }, [codeIndex])


  const changePage = (target) => {
    setPage(target);
    console.log('Target:', target, 'Page:', page);
  }

  return (
    <ThemeProvider theme={lightDefault}>
      <CodeDisplay style={{ zIndex: 1 }} codeProp={codeData[codeIndex]} />
      <Grid
        container
        rowSpacing={2}
        justifyContent={'left'}>
        <Stack
          direction="row"
          style={{
            borderBottom: '2px solid white',
          }}
        >
          <TitleBar />
          <AboutLinks />
        </Stack>
        <Stack direction={"row"}
          style={{
            marginTop: 20,
            padding: 10,
          }}
        >
          <AboutPara showPara='bio' />
          <AppsPage />
        </Stack>

        <Stacks />
      </Grid>
    </ThemeProvider >
  )
}

export default App;
