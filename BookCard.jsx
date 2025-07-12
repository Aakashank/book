import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const BookCard = ({ book }) => {
  const { title, authors, imageLinks } = book;

  return (
    <Card>
      {imageLinks?.thumbnail && (
        <CardMedia
          component="img"
          height="200"
          image={imageLinks.thumbnail}
          alt={title}
        />
      )}
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {authors?.join(', ')}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BookCard;
