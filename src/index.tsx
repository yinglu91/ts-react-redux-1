import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// npm start
// http://localhost:3000/