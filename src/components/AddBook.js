import axios from 'axios';
import React from 'react';
import BookForm from './BookForm';

const AddBook = ({ history, books, setBooks }) => {
  const handleOnSubmit = async (book) => {
    try {
   
      const response = await axios.post('http://localhost:3001/books', book);
      setBooks([response.data, ...books]);
      history.push('/');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddBook;
