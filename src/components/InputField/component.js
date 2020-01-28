import React from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';
import { Form, Input, Icon } from 'antd';

const InputField = ({
  placeholder,
  autoComplete,
  type,
  icon,
  field,
  form: { touched, errors },
  ...props
}) => {
  const fieldTouched = getIn(touched, field.name);
  const fieldErrors = getIn(errors, field.name);

  return (
    <Form.Item
      validateStatus={fieldErrors && fieldTouched && 'error'}
      help={fieldErrors && fieldTouched && fieldErrors}
    >
      <Input
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        prefix={(
          icon && (
            <Icon
              type={icon}
              style={{ color: 'rgba(0,0,0,.25)' }}
            />
          )
        )}
        {...field}
        {...props}
      />
    </Form.Item>
  );
};

InputField.propTypes = {
  placeholder: PropTypes.string,
  field: PropTypes.shape().isRequired,
  form: PropTypes.shape({
    touched: PropTypes.shape().isRequired,
    errors: PropTypes.shape().isRequired
  }).isRequired,
  autoComplete: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string
};
InputField.defaultProps = {
  placeholder: '',
  type: 'text',
  icon: null,
  autoComplete: 'off'
};

export default InputField;
