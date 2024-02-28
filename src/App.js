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
import { CodeDisplay } from './components/CodeDisplay';
import AppsPage from './components/AppsPage';

//Themes
import { lightDefault } from './themes/defaultLight';

import { codeData } from './modules/codeData';

function App() {
  const [currentTheme, setCurrentTheme] = useState(lightDefault);
  const [page, setPage] = useState('home');
  const [boxWidth, setBoxWidth] = useState('70%');
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [showPara, setShowPara] = useState('bio');
  const [codeIndex, setCodeIndex] = useState(0);

  useEffect(() => {
    document.body.style.backgroundColor =
      currentTheme.palette.background.default;

    if (isSmallScreen) {
      setBoxWidth('100%');
      setCodeIndex(0);
    } else if (!isSmallScreen) {
      setBoxWidth('70%');
      setCodeIndex(1);
    }

  }, [isSmallScreen]);

  const changePage = (target) => {
    setPage(target);
    console.log('Target:', target, 'Page:', page);
  }

  return (
    <ThemeProvider theme={lightDefault}>
      <CodeDisplay codeProp={codeData[codeIndex]} />
    </ThemeProvider >
  )
}

export default App;
