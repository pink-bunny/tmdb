import React from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';
import { Input, Typography } from 'antd';

const Search = ({
  placeholder,
  enterButton,
  field,
  onSearch,
  form: { touched, errors },
  ...props
}) => {
  const fieldTouched = getIn(touched, field.name);
  const fieldErrors = getIn(errors, field.name);

  return (
    <>
      <Input.Search
        placeholder={placeholder}
        size="large"
        enterButton={enterButton}
        onSearch={onSearch}
        onPressEnter={onSearch}
        {...field} /* eslint-disable-line */
        {...props} /* eslint-disable-line */
      />
      {fieldErrors && fieldTouched ? (
        <Typography.Paragraph
          type="danger"
          style={{ marginBottom: '16px' }}
        >
          {fieldErrors}
        </Typography.Paragraph>
      ) : null}
    </>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string,
  enterButton: PropTypes.string,
  field: PropTypes.shape().isRequired,
  form: PropTypes.shape({
    touched: PropTypes.shape().isRequired,
    errors: PropTypes.shape().isRequired
  }).isRequired,
  onSearch: PropTypes.func.isRequired
};
Search.defaultProps = {
  placeholder: '',
  enterButton: 'Enter'
};

export default Search;
