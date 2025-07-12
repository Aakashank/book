import React, { useState, useEffect, useRef } from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import { Container, Typography } from '@mui/material';

const App = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!query) return;

    // Debounce API call
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        .then(res => res.json())
        .then(data => setBooks(data.items || []))
        .catch(err => console.error(err));
    }, 500); // 500ms debounce
  }, [query]);

  return (
    <Container>
      <Typography variant="h3" gutterBottom>📚 Book Explorer</Typography>
      <SearchBar setQuery={setQuery} />
      <BookList books={books} />
    </Container>
  );
};

export default App;
