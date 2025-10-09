import { useSelector, useDispatch } from 'react-redux';
import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs';
import { deleteBook, toggleFavorite } from '../../store/features/booksSlice';
import './BookList.css';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  return (
    <div className="book-list">
      <h2>Book List</h2>
      {!!books.length ? (
        <ul className="list">
          {books.map((book) => {
            return (
              <li key={book.id}>
                <div className="list-item-container">
                  <div className="list-item-text">
                    {`${book.title} - © ${book.author}`}
                  </div>
                  <div
                    className="list-item-favorite-btn"
                    onClick={() => dispatch(toggleFavorite(book.id))}
                  >
                    {book.isFavorite ? (
                      <BsBookmarkStarFill />
                    ) : (
                      <BsBookmarkStar />
                    )}
                  </div>
                  <button
                    className="list-item-delete-btn"
                    onClick={() => dispatch(deleteBook(book.id))}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No books available</p>
      )}
    </div>
  );
};

export default BookList;
