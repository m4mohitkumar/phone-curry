import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainRoute from './routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainRoute />, document.getElementById('root'));
registerServiceWorker();
