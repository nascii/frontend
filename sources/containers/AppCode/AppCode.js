import { connect } from 'react-redux';

import CodeEditor from 'components/CodeEditor';
import { setCurrent } from 'ducks/code';

const mapStateToProps = (state) => {
  return {
    value: state.code.current
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (code) => {
      dispatch(setCurrent(code));
    }
  }
}

const AppCode = connect(
  mapStateToProps,
  mapDispatchToProps
)(CodeEditor);

export default AppCode;
