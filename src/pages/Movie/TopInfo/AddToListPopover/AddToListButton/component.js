import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

const AddToListButton = ({
  name,
  handleCLick
}) => (
  <Button
    type="link"
    onClick={handleCLick}
  >
    {name}
  </Button>
);

AddToListButton.propTypes = {
  name: PropTypes.string.isRequired,
  handleCLick: PropTypes.func.isRequired
};

export default AddToListButton;
