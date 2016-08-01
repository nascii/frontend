import { connect } from 'react-redux';

import CodeEditor from 'components/CodeEditor';
import { setCode, submit } from 'ducks/apps';

const mapStateToProps = (state) => {
  return {
    id: state.appState.appId,
    value: state.apps.filter(({id}) => id === state.appState.appId)[0].code
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (id, code) => {
      dispatch(setCode(id, code));
    },
    onSubmit: (id) => {
      dispatch(submit(id))
    }
  }
}

const AppCode = connect(
  mapStateToProps,
  mapDispatchToProps
)(CodeEditor);

export default AppCode;
