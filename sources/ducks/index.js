import { combineReducers } from 'redux';
import sensors from './sensors';
import sensorsDots from './sensorsDots';
import appModes from './appModes';
import appState from './appState';
import devices from './devices';
import code from './code';
import apps from './apps';

const iotApp = combineReducers({
  sensors,
  sensorsDots,
  appModes,
  appState,
  devices,
  code,
  apps
});

export default iotApp;
