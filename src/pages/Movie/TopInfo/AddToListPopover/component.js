import React from 'react';
import PropTypes from 'prop-types';

import { Popover, Button, Icon } from 'antd';

const AddToListComponent = ({
  list,
  addToList,
  popoverVisible,
  handleVisible
}) => (
  <>
    <Popover
      title="Add movie to list"
      trigger="click"
      visible={popoverVisible}
      onVisibleChange={handleVisible}
      content={(
        <>
          <div>
            <Button type="link">Create new list ...</Button>
          </div>
          {list && list.map((item) => (
            <div key={item.id}>
              <Button
                type="link"
                onClick={() => addToList(item.id)}
              >
                {item.name}
              </Button>
            </div>
          ))}
        </>
      )}
    >
      <Icon type="plus-circle" />
    </Popover>
  </>
);

AddToListComponent.propTypes = {
  addToList: PropTypes.func.isRequired,
  popoverVisible: PropTypes.bool.isRequired,
  handleVisible: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.object)
};

AddToListComponent.defaultProps = {
  list: null
};

export default AddToListComponent;
