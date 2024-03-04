import { useEffect, useState } from 'react';
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


function App() {
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
  }), [para]);

  return (
    <div>
      <ThemeProvider theme={lightDefault}>
        <CodeDisplay style={{ zIndex: 1 }} codeProp={codeData[codeIndex]} />
        <div className='container'>
          <header>
            <TitleBar />
            <AboutLinks />
          </header>

          <div className='aboutPara'>
            <AboutPara textData={textData} />
          </div>
          {/* <AppButton
            buttonTitle={"Velvet"}
            source={"https://github.com/RileyAlexis/Velvet"}
            application={"http://velvet.rileyalexis.com"}
            textTitle={'velvet'}
            setPara={setPara} />

          <AppButton
            buttonTitle={"Robotic Pickle Farm"}
            source={"https://github.com/RileyAlexis/roboticPickleFarm"}
            application={"http://picklefarm.rileyalexis.com"}
            textTitle={'pickles'}
            setPara={setPara} /> */}

          {/* <Stacks /> */}
        </div>

        {isSmallScreen &&
          <div className='mobileNav'>
            <MobileNav setPara={setPara} />
          </div>
        }
      </ThemeProvider >
    </div>
  )
}

export default App;
