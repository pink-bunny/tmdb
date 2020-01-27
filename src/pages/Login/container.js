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
  validationSchema: SignInValidationSchema,

  handleSubmit: (values, { props }) => props.sessionSetId(values),

  displayName: 'LoginForm'
})(Login);

const mapDispatchToProps = {
  sessionSetId
};

export default connect(null, mapDispatchToProps)(LoginForm);
