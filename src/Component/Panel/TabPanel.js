import React from "react";
import PropTypes from 'prop-types';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import './TabPanel.css';


var theme = createMuiTheme({
  root: {
    flexGrow: 1,
  },
});


export function TabContainer(props) {
  return (
    <div>{props.children}</div>
  );
}


TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


export const TabPanel = (props) => {
  const [value, setValue] = React.useState(0);

  if (props.theme !== undefined) {
    theme = props.theme;
  }

  function handleChange(event, newValue) {
    setValue(newValue);
    console.log(props.children.length);
  }

  if (props.tabs.length === props.children.length) {
    return (
      <MuiThemeProvider theme={theme} >
        <div className={theme.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            {
              props.tabs.map((item, key) =>
                <Tab classes={{ root: "tabRoot" }} key={item + key} label={item} />
              )
            }
          </Tabs>
        </div>
        {props.children[value]}
      </MuiThemeProvider>
    );
  }
  else {
    return (
      <div> please insert equal number of tab and component</div>
    );
  }
}

export default TabPanel;