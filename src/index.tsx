import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import store from "./store/store";
import theme from "./theme";
import App from "./App";
import "./index.css";

ReactDOM.render(
   <React.StrictMode>
      <BrowserRouter>
         <Provider store={store}>
            <ThemeProvider theme={theme}>
               <CssBaseline />
               <App />
            </ThemeProvider>
         </Provider>
      </BrowserRouter>
   </React.StrictMode>,
   document.getElementById("root")
);

reportWebVitals();
