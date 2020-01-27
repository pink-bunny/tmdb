import { connect } from 'react-redux';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import Login from './component';
import { sessionSetId } from '../../../state/session/actions';

const SignInValidationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Required'),
  password: Yup.string()
    .required('Required')
    .min(4, 'Your password should contain at least 4 symbols')
});

const LoginForm = withFormik({
  mapPropsToValues: () => ({ username: '', password: '' }),

  validationSchema: SignInValidationSchema,

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
