import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, fetchBook } from '../../store/features/booksSlice';
import './BookForm.css';
import createBookWithID from '../../utils/createBookWithID';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  function formSubmitHandler(event) {
    event.preventDefault();
    if (title && author) {
      dispatch(addBook(createBookWithID({ title, author })));
    }
    setTitle('');
    setAuthor('');
  }

  function getRandomBoodViaAPI() {
    dispatch(fetchBook('http://localhost:5000/random-quote'));
  }

  return (
    <>
      <form
        onSubmit={(event) => formSubmitHandler(event)}
        className="book-form"
      >
        <h2 className="book-form-h2">Add Book to the List</h2>
        <div className="book-form-inputs">
          <label htmlFor="title">
            Title*
            <input
              type="text"
              id="title"
              className="form-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label htmlFor="author">
            Author*
            <input
              type="text"
              id="author"
              className="form-input"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </label>
        </div>
        <div className="book-form-buttons">
          <button type="submit" className="book-form-addBook book-active">
            Add Book
          </button>
          <button className="book-form-addRandomBook book-active">
            Add Random Book
          </button>
          <br />
          <button
            className="book-form-addRandomBookViaAPI book-active"
            onClick={getRandomBoodViaAPI}
          >
            Add Random Book via API
          </button>
        </div>
      </form>
    </>
  );
};

export default BookForm;
