import { connect } from 'react-redux';

import Login from './component';
import { sessionSetId } from '../../../state/session/actions';

const mapDispatchToProps = {
  sessionSetId
};

export default connect(null, mapDispatchToProps)(Login);
