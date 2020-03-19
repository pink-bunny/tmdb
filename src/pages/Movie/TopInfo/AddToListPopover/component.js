import React from 'react';
import PropTypes from 'prop-types';
import { Popover, Icon } from 'antd';

import PopoverContent from './PopoverContent';

const AddToListComponent = ({
  list,
  addToList,
  popoverVisible,
  handleVisiblePopover,
  popoverCreateListModalSubmit
}) => (
  <>
    <Popover
      title="Add movie to list"
      trigger="click"
      visible={popoverVisible}
      onVisibleChange={handleVisiblePopover}
      content={(
        <PopoverContent
          list={list}
          addToList={addToList}
          closePopover={() => handleVisiblePopover(false)}
          createListModalSubmit={popoverCreateListModalSubmit}
        />
      )}
    >
      <Icon type="plus-circle" />
    </Popover>
  </>
);

AddToListComponent.propTypes = {
  addToList: PropTypes.func.isRequired,
  popoverCreateListModalSubmit: PropTypes.func.isRequired,
  popoverVisible: PropTypes.bool.isRequired,
  handleVisiblePopover: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.object)
};

AddToListComponent.defaultProps = {
  list: null
};

export default AddToListComponent;
