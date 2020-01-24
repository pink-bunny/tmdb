import React from 'react';
import PropTypes from 'prop-types';
import { Button as AntdButton } from 'antd';

const Button = ({
  text,
  type,
  htmlType,
  loading
}) => (
  <AntdButton
    loading={loading}
    type={type}
    htmlType={htmlType}
  >
    {text}
  </AntdButton>
);

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  htmlType: PropTypes.string,
  loading: PropTypes.bool
};
Button.defaultProps = {
  text: 'Button',
  type: 'primary',
  htmlType: 'button',
  loading: false
};

export default Button;
