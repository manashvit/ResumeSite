import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {HashRouter as Router,Switch,Route, Redirect} from 'react-router-dom'
import App from './App';
import Geektest from './Geektest';
import store from './store/setup';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={()=><App/>}/>
        <Route path="/geektest" component={()=><Geektest/>}/>
        <Redirect to="/"/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

