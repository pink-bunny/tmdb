import { withFormik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { searchMovies } from '../../../../state/dashboard/actions';

import Search from './component';

export const handleSubmit = (values, { props }) => {
  const { search } = values;
  props.searchMovies(search);
};

const SearchFormSchema = Yup.object().shape({
  search: Yup.string()
    .required('Search field can\'t be empty')
});

const SearchForm = withFormik({
  mapPropsToValues: () => ({ search: '' }),

  validationSchema: SearchFormSchema,

  handleSubmit,

  displayName: 'SearchForm'
})(Search);

const mapDispatchToProps = {
  searchMovies
};

export default connect(null, mapDispatchToProps)(SearchForm);
