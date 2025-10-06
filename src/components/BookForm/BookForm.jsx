import styles from './BookForm.module.css';

const BookForm = () => {
  return (
    <>
      <form className={styles.bookForm}>
        <h2 className={styles.bookFormH2}>Book Form</h2>
        <div className={styles.bookFormInputs}>
          <input type="text" className={styles.bookFormInput} />
          <input type="text" className={styles.bookFormInput} />
        </div>
        <div className={styles.bookFormButtons}>
          <button className={styles.bookFormButton}>Add Book</button>
          <button className={styles.bookFormButton}>Add Random Book</button>
          <br />
          <button className={styles.bookFormButton}>
            Add Random Book via API
          </button>
        </div>
      </form>
    </>
  );
};

export default BookForm;
