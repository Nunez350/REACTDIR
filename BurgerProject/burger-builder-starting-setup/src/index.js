import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Test from './containers/test';
ReactDOM.render(<Test />, document.getElementById('root'));
registerServiceWorker();
