import React from 'react';
import { Grid } from '@mui/material';
import BookCard from './BookCard';

const BookList = ({ books }) => {
  return (
    <Grid container spacing={2}>
      {books.map((book) => (
        <Grid item xs={12} sm={6} md={4} key={book.id}>
          <BookCard book={book.volumeInfo} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BookList;
