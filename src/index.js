import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import Store from "store";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import uiThemeConfig from "uiThemeConfig";
import App from "./App";

let store = Store();

const theme = createMuiTheme(uiThemeConfig);

const ExApp = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(<ExApp />, document.getElementById("root"));
