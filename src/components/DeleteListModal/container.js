import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import withModal from '../../hoc/withModal';
import { myListsDeleteListError } from '../../../state/my_lists/selectors';
import {
  deleteMyList as deleteMyListAction
} from '../../../state/my_list/actions';
import DeleteListModal from './component';

class DeleteListModalContainer extends React.Component {
  deleteList = () => {
    const { deleteMyList, id, hideModal } = this.props;

    deleteMyList(id, hideModal);
  };

  render() {
    const {
      id,
      name,
      modalVisible,
      showModal,
      hideModal,
      error,
      triggerComponent,
      triggerProps
    } = this.props;

    return (
      <DeleteListModal
        id={id}
        name={name}
        error={error}
        deleteList={this.deleteList}
        modalVisible={modalVisible}
        handleTriggerClick={showModal}
        hideModal={hideModal}
        triggerComponent={triggerComponent}
        triggerProps={triggerProps}
      />
    );
  }
}

DeleteListModalContainer.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  deleteMyList: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  triggerProps: PropTypes.shape({
    onClick: PropTypes.func
  }),
  triggerComponent: PropTypes.func.isRequired
};

DeleteListModalContainer.defaultProps = {
  error: '',
  triggerProps: null
};

const mapStateToProps = (state) => ({
  error: myListsDeleteListError(state)
});

const mapDispatchToPtops = {
  deleteMyList: deleteMyListAction
};

export default connect(mapStateToProps, mapDispatchToPtops)(withModal(DeleteListModalContainer));
