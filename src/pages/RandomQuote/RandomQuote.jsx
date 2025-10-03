import { MdFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';
import { useState } from 'react';
import fetchQuote from './handlers/fetchQuote';
import toggleFavorites from './handlers/favoriteQuotes';
import styles from './RandomQuote.module.css';

const RandomQuote = () => {
  const [currentQuote, setCurrentQuote] = useState(null);
  const [favorites, setFavorites] = useState([]);

  return (
    <>
      <div className="container">
        <h2>Random Quote App</h2>
        <div className={styles.quoteContainer}>
          <div className={styles.quote}>
            <p className={styles.quoteText}>
              {currentQuote
                ? currentQuote.quote
                : 'Click the button to get a random quote!'}
            </p>
            <p className={styles.quoteAuthor}>
              © {currentQuote ? currentQuote.author : 'from admine with love'}
            </p>
          </div>
          <div className={styles.buttons}>
            <button
              className={styles.generateBtn}
              onClick={() => fetchQuote(setCurrentQuote)}
            >
              Get random quote
            </button>
            <button
              className={styles.favoriteBtn}
              onClick={() =>
                toggleFavorites(currentQuote, setCurrentQuote, setFavorites)
              }
            >
              {currentQuote.isFavorite ? (
                <MdOutlineFavorite />
              ) : (
                <MdFavoriteBorder />
              )}
            </button>
          </div>
          <div className={styles.favorites}>
            {!!favorites.length ? (
              favorites.map((favoriteQuote) => {
                return (
                  <div key={favoriteQuote.id} className={styles.favoriteQuote}>
                    <p className={styles.favoriteQuoteText}>
                      {favoriteQuote.quote}
                    </p>
                    <p className={styles.favoriteQuoteAuthor}>
                      © {favoriteQuote.author}
                    </p>
                  </div>
                );
              })
            ) : (
              <p className={styles.noneFavorites}>Обраних цитат немає</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RandomQuote;
