import { connect } from 'react-redux';

import Login from './component';
import { sessionSetId } from '../../../state/session/actions';

const mapDispatchToProps = (dispatch) => ({
  onSessionSetId: (id) => dispatch(sessionSetId(id))
});

export default connect(null, mapDispatchToProps)(Login);
