import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import reducers from './ducks';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import App from 'containers/App';

import './app.css';

const logger = createLogger();

var devices = fetch('/api/devices').then(res => res.json()).catch(() => []);
var apps = fetch('/api/apps').then(res => res.json()).catch(() => []);

var appData = Promise.all([
  devices,
  apps
]);

appData.then(([devices, apps]) => {
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
      devices,
      apps: [
        ...apps,
        {
          id: 'new',
          name: 'New',
          code: ''
        }
      ]
    },
    compose(
      applyMiddleware(logger, thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('app')
  );
});
