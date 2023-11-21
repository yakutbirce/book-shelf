import React, { useCallback, useEffect, useState } from 'react';
import { Button, Container, Grid, Stack, TextField } from '@mui/material';
import axios from 'axios';
import Link from 'next/link';
import BookCard from '../components/BookCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/books')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => console.error('error :>> ', error));
  }, []);

  const handleSearch = useCallback(() => {
    axios
      .get(`http://localhost:3001/books?q=${search}`)
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => console.log('error :>> ', error));
  }, [search]);

  const handleDelete = useCallback(
    async (id) => {
      try {
        const userConfirmed = window.confirm("Are you sure you want to delete this book?");

        if (userConfirmed) {
          await axios.delete(`http://localhost:3001/books/${id}`);
          setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
        }
      } catch (error) {
        console.error(error);
      }
    },
    []
  );

  return (
    <Container>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={1} marginBottom={2}>
        <TextField
          label="Search Books"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
          size="small"
        />
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
      </Stack>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
        <Link href="/add-book">
          <Button variant="contained" color="secondary">
            Add Book
          </Button>
        </Link>
        <div>
          <Link href="/login">
            <Button variant="contained" style={{ marginRight: '8px', backgroundColor: '#6200EA', color: '#fff' }}>
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button variant="contained" style={{ backgroundColor: '#1976D2', color: '#fff' }}>
              Sign Up
            </Button>
          </Link>
        </div>
      </div>

      <Grid container spacing={2}>
        {books &&
          books.map((book) => (
            <Grid item key={book.id} xs={12} sm={6} md={4}>
              <BookCard
                book={book}
                onDelete={() => handleDelete(book.id)}
              />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Home;
