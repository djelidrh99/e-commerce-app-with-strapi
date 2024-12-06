 // @ts-ignore
 import Header1 from "./compenent/header/header1"
 // @ts-ignore
 import Header2 from "./compenent/header/header2"
 // @ts-ignore
 import Header3 from "./compenent/header/header3"
 import Hero from "./compenent/hero/Hero";
 import Box from "@mui/material/Box";
 import Main from "./compenent/main/Main";

//  dark-mode-theme
import {  CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme"; 
 function App() {
  const [theme, colorMode] = useMode();

  return (
   
    <ColorModeContext.Provider 
    value={colorMode}>
      <ThemeProvider 
      theme={theme}>
        <CssBaseline />
        <div className="App">
        <Header1/>
    <Header2/>
    <Header3/>
    <Box sx={{backgroundColor:theme.palette.myBg.main}}>
    <Hero/>
    <Main/>
    </Box>
    
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
