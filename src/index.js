import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './js/registerServiceWorker';

import './css/index.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
   document.getElementById('root')
);
registerServiceWorker();
