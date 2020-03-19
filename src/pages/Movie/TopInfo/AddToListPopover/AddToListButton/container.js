import React from 'react';
import PropTypes from 'prop-types';

import AddToListButtonComponent from './component';

class AddToListButton extends React.Component {
  handleCLick = () => {
    const { id, addToList } = this.props;
    addToList(id);
  }

  render() {
    const { name } = this.props;

    return (
      <AddToListButtonComponent
        handleCLick={this.handleCLick}
        name={name}
      />
    );
  }
}

AddToListButton.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  addToList: PropTypes.func.isRequired
};

export default AddToListButton;
