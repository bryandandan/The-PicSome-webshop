import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"

import {ContextProvider} from "./Context"
import App from "./App"

import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ContextProvider>
      <Router basename="/The-PicSome-webshop">
          <App />
      </Router>
  </ContextProvider>, 
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();