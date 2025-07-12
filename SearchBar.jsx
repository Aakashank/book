import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ setQuery }) => {
  return (
    <TextField
      fullWidth
      label="Search Books"
      variant="outlined"
      onChange={(e) => setQuery(e.target.value)}
      margin="normal"
    />
  );
};

export default SearchBar;
