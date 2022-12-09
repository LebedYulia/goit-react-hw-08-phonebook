import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/filterSlice';
import TextField from '@mui/material/TextField';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    e.preventDefault(); 
    const filter = e.currentTarget.value;
    dispatch(changeFilter(filter))
  }
   
  return (    
    <TextField
    fullWidth
    id="filter"
    name="filter"
    label=" Find contacts by name"
    onChange={handleChange}
    margin="normal"
    size="small"   
  />
  );
};


