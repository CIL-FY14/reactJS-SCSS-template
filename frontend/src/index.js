import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// eslint-disable-next-line
import style from './assets/sass/index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
