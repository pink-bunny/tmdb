import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import CreateNewListModal from '../../../../../components/CreateNewListModal';
import AddToListButton from '../AddToListButton';

const PopoverContent = ({
  list,
  addToList,
  closePopover,
  createListModalSubmit
}) => (
  <>
    <div>
      <CreateNewListModal
        handleSubmitList={createListModalSubmit}
        triggerComponent={Button}
        triggerProps={{
          onClick: closePopover,
          type: 'link',
          children: 'Create new list ...'
        }}
      />
    </div>

    {list && list.map((item) => (
      <div key={item.id}>
        <AddToListButton
          addToList={addToList}
          id={item.id}
          name={item.name}
        />
      </div>
    ))}
  </>
);

PopoverContent.propTypes = {
  createListModalSubmit: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.object),
  addToList: PropTypes.func.isRequired,
  closePopover: PropTypes.func.isRequired
};

PopoverContent.defaultProps = {
  list: null
};

export default PopoverContent;
