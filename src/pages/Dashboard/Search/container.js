import React from 'react';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import Search from './component';

const SearchFormSchema = Yup.object().shape({
  search: Yup.string()
    .required('Search field can\'t be empty')
});

const SearchForm = withFormik({
  mapPropsToValues: () => ({ search: '' }),

  validationSchema: SearchFormSchema,

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'SearchForm'
})(Search);

const mapDispatchToProps = {};

export default connect(null, mapDispatchToProps)(SearchForm);
