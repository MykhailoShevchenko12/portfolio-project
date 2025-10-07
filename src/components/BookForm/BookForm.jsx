import './BookForm.css';

const BookForm = () => {
  function formSubmitHandler(event) {
    event.preventDefault();
  }

  return (
    <>
      <form
        onSubmit={(event) => formSubmitHandler(event)}
        className="book-form"
      >
        <h2 className="book-form-h2">Book Form</h2>
        <div className="book-form-inputs">
          {/* <label htmlFor="text">Title*</label> */}
          <input type="text" className="form-input" />
          {/* <label htmlFor="text">Author*</label> */}
          <input type="text" className="form-input" />
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
