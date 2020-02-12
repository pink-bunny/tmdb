import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import withModal from '../../../hoc/withModal';
import { deleteMyListError } from '../../../../state/my_lists/selectors';
import {
  deleteMyList as deleteMyListAction
} from '../../../../state/my_lists/actions';
import DeleteListModal from './component';

class DeleteListModalContainer extends React.Component {
  deleteList = () => {
    const { deleteMyList, id, hideModal } = this.props;

    return (
      deleteMyList(id, hideModal)
    );
  };

  render() {
    const {
      id,
      name,
      modalVisible,
      showModal,
      hideModal,
      error
    } = this.props;

    return (
      <DeleteListModal
        id={id}
        name={name}
        error={error}
        deleteList={this.deleteList}
        modalVisible={modalVisible}
        showModal={showModal}
        hideModal={hideModal}
      />
    );
  }
}

DeleteListModalContainer.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  deleteMyList: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string
};

DeleteListModalContainer.defaultProps = {
  error: ''
};

const mapStateToProps = (state) => ({
  error: deleteMyListError(state)
});

const mapDispatchToPtops = {
  deleteMyList: deleteMyListAction
};

export default connect(mapStateToProps, mapDispatchToPtops)(withModal(DeleteListModalContainer));
