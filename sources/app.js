import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import reducers from './ducks';
import createLogger from 'redux-logger';

import App from 'containers/App';

import './app.css';

const logger = createLogger();

let store = createStore(reducers, {
    appModes: [
      {
        id: 'network',
        name: 'Сеть'
      },
      {
        id: 'devices',
        name: 'Девайсы'
      },
      {
        id: 'apps',
        name: 'Приложения'
      }
    ],
    devices: [
      {
        "id": "fe80::fc54:ff:fecb:288c",
        "lastSeen": 666,
        "caps": [
          "DALI",
          "ADC",
          "UART"
        ]
      },
      {
        "id": "fe80::56a4:1111:4444:6666",
        "lastSeen": 777,
        "caps": [
          "DALI",
          "ADC",
          "UART"
        ]
      }
    ]
  },
  compose(
    applyMiddleware(logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
