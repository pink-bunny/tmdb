import React from 'react';

const withModal = (WrappedComponent) => {
  class WrappedComponentShell extends React.Component {
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
      const { modalVisible } = this.state;
      const modalProps = {
        modalVisible,
        showModal: this.showModal,
        hideModal: this.hideModal
      };

      return <WrappedComponent {...modalProps} {...this.props} />; /* eslint-disable-line */
    }
  }

  return WrappedComponentShell;
};

export default withModal;
