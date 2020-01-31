import { connect } from 'react-redux';

import Header from './component';
import { completeSession } from '../../../state/session/actions';
import { isUserLoggedIn, username } from '../../../state/session/selectors';

const mapDispatchToProps = {
  completeSession
};

const mapStateToProps = (state) => ({
  userLoggedIn: isUserLoggedIn(state),
  username: username(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
