import { useEffect, useState } from 'react';
import ReactPageScroller, { SectionContainer } from 'react-page-scroller';
import './App.css';

//Material UI
import { Grid, ThemeProvider, Stack, Paper, Button } from '@mui/material';
import { useMediaQuery } from "@mui/material";


//Components
import TitleBar from './components/TitleBar';
import { AboutPara } from './components/AboutPara';
import AboutLinks from './components/AboutLinks';
import Stacks from './components/Stacks';
import { CodeDisplay } from './components/CodeDisplay';
import { AppButton } from './components/AppButton';

//Themes
import { lightDefault } from './themes/defaultLight';

//Data
import { codeData } from './modules/codeData';
import { paraData } from './modules/paraData';
import { MobileNav } from './components/MobileNav';
import { HomeScreen } from './screens/Home.screen';
import { PickleFarmScreen } from './screens/PickleFarm.screen';
import { VelvetScreen } from './screens/Velvet.screen';


function App() {
  const [pageScroll, setPageScroll] = useState(0);
  const [currentTheme, setCurrentTheme] = useState(lightDefault);
  const [page, setPage] = useState('home');
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [codeIndex, setCodeIndex] = useState(0);
  const [para, setPara] = useState('bio');
  const [textData, setTextData] = useState(paraData[para]);

  useEffect(() => {
    const setResize = () => {
      setCodeIndex(() => isSmallScreen ? 0 : 1);
    }

    window.addEventListener('resize', setResize);

    return () => {
      window.removeEventListener('resize', setResize);
    }
  }, [codeIndex])

  useEffect((() => {
    console.log('useEffect para', para);
    setTextData(paraData[para])
  }), [para, setPara]);

  const handlePageChange = (number) => {
    setPageScroll(number);
    console.log(number);
  }

  return (
    <ThemeProvider theme={lightDefault}>
      <CodeDisplay style={{ zIndex: 1 }} codeProp={codeData[codeIndex]} />

      <div className='container'>
        <header>
          <TitleBar />
          <AboutLinks />
        </header>

        <ReactPageScroller pageOnChange={handlePageChange}>
          <HomeScreen />
          <PickleFarmScreen />
          <VelvetScreen />
        </ReactPageScroller>




      </div>
    </ThemeProvider >

  )
}

export default App;
