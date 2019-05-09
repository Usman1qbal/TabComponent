import React from 'react';
import {TabPanel,TabContainer} from './Component/Panel/TabPanel';
import { createMuiTheme} from '@material-ui/core/styles';
import './App.css';


function App() {
  const tabs = ['Required', "Advanced","test"];
  const theme = createMuiTheme({
    palette: {
      primary:{main: "#0090EA"},
    },
  });
  
  return (
    <div className="App">
      <h1>Tab Component</h1>
      <TabPanel tabs={tabs} theme={theme}>
        <TabContainer><h2>Item One</h2></TabContainer>
        <TabContainer><h2>Item 2</h2></TabContainer>
        
        <TabContainer><h2>Item 2</h2></TabContainer>
      </TabPanel>
    </div>
  );
}

export default App;
