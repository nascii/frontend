import { connect } from 'react-redux';

import List from 'components/List';
import Device from 'components/Device';
import { setAppMode } from 'ducks/appState';

const mapStateToProps = (state) => {
  return {
    items: state.devices,
    itemComponent: Device
  }
}

const Devices = connect(
  mapStateToProps
)(List);

export default Devices;
