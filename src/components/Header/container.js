import { connect } from 'react-redux';

import Header from './component';
import { completeSession } from '../../../state/session/actions';

const mapDispatchToProps = {
  completeSession
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
