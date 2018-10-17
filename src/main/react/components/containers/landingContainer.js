import {connect} from 'react-redux';

import Landing from '../presentationals/pages/landing';
import * as actions from '../../actions/actionCreators';
import * as asyncActions from '../../actions/asyncActions/asyncActionCreators';

const mapStateToProps = state => ({...state.landing});

const mapDispatchToProps = (dispatch) => ({
  clearState: () => dispatch(actions.clearState()),
  handleInputChange: (value) => dispatch(actions.setInputValue(value)),
  handleSubmit: (term) => asyncActions.fetchPicture(dispatch, term),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Landing);