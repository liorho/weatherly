import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './custom.scss'
import App from './App';
import * as serviceWorker from './serviceWorker';
import {store} from './store/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
