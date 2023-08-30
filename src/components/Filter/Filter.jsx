import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Label } from '../ContactForm/ContactForm.styled';
import { FilterInput } from './Filter.styled';
import { setFilter } from '../store/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <FilterInput
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </Label>
  );
};

export default Filter;