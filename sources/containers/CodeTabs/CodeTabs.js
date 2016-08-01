import { connect } from 'react-redux';

import Menu from 'components/Menu';
import { setCodeId } from 'ducks/appState';

const mapStateToProps = (state) => {
  return {
    items: state.apps,
    currentItemId: state.appState.appId,
    index: 2
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onItemClick: (id) => {
      dispatch(setCodeId(id));
    }
  }
}

const MainMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);

export default MainMenu;
