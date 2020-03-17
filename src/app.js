import React from "react";
import "./App.css";
import {Router, Route} from 'react-router'
import Proxy1 from './Components/Proxy1'
import { createBrowserHistory } from 'history';


const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL
});


function App () {

  return (
    <Router history={history} basename={'/deploy-web'}>
      <Route path='/' component={Proxy1} />
    </Router>

)
}

export default App;
