import { connect } from 'react-redux';

import Menu from 'components/Menu';
import { setAppMode } from 'ducks/appState';

const mapStateToProps = (state) => {
  return {
    items: state.appModes,
    currentItemId: state.appState.modeId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onItemClick: (id) => {
      dispatch(setAppMode(id));
    }
  }
}

const MainMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);

export default MainMenu;
