import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Icon } from 'antd';

const InputText = ({ placeholder, type, icon }) => (
  <Form.Item
    // validateStatus="error"
    // help="Should be combination of numbers & alphabets"
  >
    <Input
      type={type}
      prefix={(
        icon && (
          <Icon
            type={icon}
            style={{ color: 'rgba(0,0,0,.25)' }}
          />
        )
      )}
      placeholder={placeholder}
    />
  </Form.Item>
);

InputText.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string
};
InputText.defaultProps = {
  placeholder: '',
  type: 'text',
  icon: null
};

export default InputText;
