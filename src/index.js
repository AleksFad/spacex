import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Fragment>
    <Router>
      <App />
    </Router>
  </Fragment>,
  document.getElementById('root')
);
