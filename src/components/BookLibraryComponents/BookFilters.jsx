import { useDispatch, useSelector } from 'react-redux';
import './BookFilters.css';
import {
  setTitleFilter,
  setAuthorFilter,
  resetFilters,
  toggleOnlyFavorite,
} from '../../store/features/filterSlice';

const BookFilters = () => {
  const { titleFilter, authorFilter, onlyFavorite } = useSelector(
    (state) => state.filter
  );
  const dispatch = useDispatch();

  return (
    <div className="book-filter">
      <input
        type="text"
        id="titleFilter"
        placeholder="Filter by title..."
        value={titleFilter}
        onChange={(event) => dispatch(setTitleFilter(event.target.value))}
      />
      <input
        type="text"
        id="authorFilter"
        placeholder="Filter by author..."
        value={authorFilter}
        onChange={(event) => dispatch(setAuthorFilter(event.target.value))}
      />
      <label htmlFor="only-favorite">
        <input
          type="checkbox"
          id="only-favorite"
          checked={onlyFavorite}
          onChange={() => dispatch(toggleOnlyFavorite())}
        />
        Only Favorite
      </label>
      <button onClick={() => dispatch(resetFilters())}>Reset Filters</button>
    </div>
  );
};

export default BookFilters;
