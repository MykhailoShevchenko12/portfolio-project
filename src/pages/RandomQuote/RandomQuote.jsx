import { MdFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';

import styles from './RandomQuote.module.css';

const RandomQuote = () => {
  return (
    <>
      <div className="container">
        <h2>Random Quote App</h2>
        <div className={styles.quoteContainer}>
          <div className={styles.quote}>
            <p className={styles.quoteText}>
              Click the button to get a random quote!
            </p>
            <p className={styles.quoteAuthor}>© Mikhail</p>
          </div>
          <div className={styles.buttons}>
            <button className={styles.generateBtn}>Get random quote</button>
            <button className={styles.favoriteBtn}>
              <MdFavoriteBorder />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RandomQuote;
