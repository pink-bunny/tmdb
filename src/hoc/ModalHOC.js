import React from 'react';
import PropTypes from 'prop-types';

class ModalHOC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  showModal = () => {
    this.setState({ modalVisible: true });
  };

  hideModal = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    const { showModalComponent, modalContent } = this.props;
    const { modalVisible } = this.state;
    const modalProps = {
      modalVisible,
      showModal: this.showModal,
      hideModal: this.hideModal
    };

    return (
      <>
        { showModalComponent(modalProps) }
        { modalContent(modalProps) }
      </>
    );
  }
}

ModalHOC.propTypes = {
  showModalComponent: PropTypes.func.isRequired,
  modalContent: PropTypes.func.isRequired
};

export default ModalHOC;
