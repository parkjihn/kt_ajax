import React from 'react';
import _ from 'lodash';
import Book from './Book';
import axios from 'axios';

const BooksList = ({ books, setBooks }) => {
  const handleRemoveBook = async (id) => {
    try {
    
      await axios.delete(`http://localhost:3001/books/${id}`);
      setBooks(books.filter((book) => book.id !== id));
    } catch (error) {
      console.error('Error removing book:', error);
    }
  };

  return (
    <React.Fragment>
      <div className="book-list">
        {!_.isEmpty(books) ? (
          books.map((book) => (
            <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p className="message">Нет доступных книг.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default BooksList;
