import BookForm from '../../components/BookLibraryComponents/BookForm';
import BookFilters from '../../components/BookLibraryComponents/BookFilters';
import BookList from '../../components/BookLibraryComponents/BookList';
import './BookLibrary.css';

const BookLibrary = () => {
  return (
    <>
      <div className="container">
        <h2>Book Library App</h2>
        <div className="book-library">
          <div className="leftside">
            <BookForm />
          </div>
          <div className="rightside">
            <BookFilters />
            <BookList />
          </div>
        </div>
      </div>
    </>
  );
};

export default BookLibrary;
