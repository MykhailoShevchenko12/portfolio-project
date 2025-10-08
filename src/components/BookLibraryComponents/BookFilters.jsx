import './BookFilters.css';

const BookFilters = () => {
  return (
    <div className="book-filter">
      <input type="text" placeholder="Filter by title..." />
      <input type="text" placeholder="Filter by author..." />
      <label htmlFor="only-favorite">
        <input type="checkbox" id="only-favorite" />
        Only Favorite
      </label>
      <button>Reset Filters</button>
    </div>
  );
};

export default BookFilters;
