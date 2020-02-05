import { withFormik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { searchMovies } from '../../../../state/dashboard/actions';

import Search from './component';

const SearchFormSchema = Yup.object().shape({
  search: Yup.string()
    .required('Search field can\'t be empty')
});

const SearchForm = withFormik({
  mapPropsToValues: () => ({ search: '' }),

  validationSchema: SearchFormSchema,

  handleSubmit: (values, { props, setErrors, setSubmitting }) => {
    props.searchMovies(values, setErrors, setSubmitting);
  },

  displayName: 'SearchForm'
})(Search);

const mapDispatchToProps = {
  searchMovies
};

export default connect(null, mapDispatchToProps)(SearchForm);
