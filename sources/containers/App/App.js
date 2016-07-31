import { connect } from 'react-redux';

import AppComponent from 'components/App';

const mapStateToProps = (state) => {
  return {
    currentModeId: state.appState.modeId
  }
}

const App = connect(
  mapStateToProps
)(AppComponent);

export default App;
