import { connect } from 'react-redux';
import { withFormik } from 'formik';

import Login from './component';
import { sessionSetId } from '../../../state/session/actions';

const LoginForm = withFormik({
  mapPropsToValues: () => ({ username: '', password: '' }),

  validate: (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = 'Required username field';
    }
    if (!values.password) {
      errors.password = 'Required password field';
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'LoginForm'
})(Login);

const mapDispatchToProps = {
  sessionSetId
};

export default connect(null, mapDispatchToProps)(LoginForm);
