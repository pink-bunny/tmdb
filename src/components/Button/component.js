import React from 'react';
import PropTypes from 'prop-types';
import { Button as AntdButton } from 'antd';

const Button = ({
  text,
  type,
  htmlType,
  loading,
  onClick
}) => (
  <AntdButton
    loading={loading}
    type={type}
    htmlType={htmlType}
    onClick={onClick}
  >
    {text}
  </AntdButton>
);

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  htmlType: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func
};
Button.defaultProps = {
  text: 'Button',
  type: 'primary',
  htmlType: 'button',
  loading: false,
  onClick: undefined
};

export default Button;
