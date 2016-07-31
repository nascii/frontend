import { connect } from 'react-redux';

import Relations from 'components/relations';

const mapStateToProps = (state) => {
  return {
    dots: state.sensorsDots
  }
}

const RelationsContainer = connect(
  mapStateToProps
)(Relations);

export default RelationsContainer;
