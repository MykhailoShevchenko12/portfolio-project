import { useDispatch, useSelector } from 'react-redux';
import {
  setTitle,
  setAuthor,
  resetForm,
} from '../../store/features/bookLibrarySlice';
import './BookForm.css';

const BookForm = () => {
  const { title, author } = useSelector((state) => state.book);
  const dispatch = useDispatch();

  function formSubmitHandler(event) {
    event.preventDefault();
    dispatch(resetForm());
  }

  return (
    <>
      <form
        onSubmit={(event) => formSubmitHandler(event)}
        className="book-form"
      >
        <h2 className="book-form-h2">Add Book to the list</h2>
        <div className="book-form-inputs">
          <label htmlFor="title">
            Title*
            <input
              type="text"
              id="title"
              className="form-input"
              value={title}
              onChange={(e) => dispatch(setTitle(e.target.value))}
            />
          </label>
          <label htmlFor="author">
            Author*
            <input
              type="text"
              id="author"
              className="form-input"
              value={author}
              onChange={(e) => dispatch(setAuthor(e.target.value))}
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
          <button className="book-form-addRandomBookViaAPI book-active">
            Add Random Book via API
          </button>
        </div>
      </form>
    </>
  );
};

export default BookForm;
