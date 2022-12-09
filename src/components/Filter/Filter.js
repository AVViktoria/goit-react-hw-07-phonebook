import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterChanges } from 'redux/filter/filterSlice';

export default function Filter({ value }) {
  const dispatch = useDispatch();
  const onValueChanges = e => {
    dispatch(filterChanges(e.currentTarget.value));
  };

  return (
    <form>
      <div className="inputBox">
        <label className="inputLabel">
          Find contacts by name
          <input
            className="inputContent"
            type="text"
            value={value}
            onChange={onValueChanges}
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Filter"
            required
          />
        </label>
      </div>
    </form>
  );
}
Filter.prototype = {
  value: PropTypes.string.isRequired,
  onValueChanges: PropTypes.func.isRequired,
};
