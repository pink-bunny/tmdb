import React from 'react';

const withToggleState = (WrappedComponent) => {
  class WrappedComponentShell extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visible: false
      };
    }

    toggleVisible = () => {
      const { visible } = this.state;
      this.setState({ visible: !visible });
    }

    render() {
      const { visible } = this.state;
      const props = {
        visible,
        toggleVisible: this.toggleVisible
      };

      return <WrappedComponent {...props} {...this.props} />; /* eslint-disable-line */
    }
  }

  return WrappedComponentShell;
};

export default withToggleState;
