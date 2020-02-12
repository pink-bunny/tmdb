import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

import {
  deleteMyList as deleteMyListAction
} from '../../../../state/my_lists/actions';
import DeleteListModal from './component';

class DeleteListModalContainer extends React.Component {
  deleteListModal = () => {
    const { id } = this.props;
    const { deleteMyList } = this.props;

    return (
      Modal.confirm({
        title: 'Do you want to delete list?',
        onOk() {
          deleteMyList(id);
        }
      })
    );
  };

  render() {
    return <DeleteListModal deleteListModal={this.deleteListModal} />;
  }
}

DeleteListModalContainer.propTypes = {
  deleteMyList: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

const mapDispatchToPtops = {
  deleteMyList: deleteMyListAction
};

export default connect(null, mapDispatchToPtops)(DeleteListModalContainer);
