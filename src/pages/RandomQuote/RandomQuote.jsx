import { MdFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { useQuoteContext } from '../../context/RandomQuoteContext';
import styles from './RandomQuote.module.css';

const RandomQuote = () => {
  const { toggleFavorites, fetchQuote, initialState, removeFavoriteQuote } =
    useQuoteContext();
  const parsedQuoteData = initialState();
  const [currentQuote, setCurrentQuote] = useState(() => {
    return parsedQuoteData ? parsedQuoteData.currentQuote : null;
  });
  const [favorites, setFavorites] = useState(() => {
    return parsedQuoteData ? parsedQuoteData.favorites : [];
  });

  useEffect(() => {
    const quoteData = {
      currentQuote,
      favorites,
    };
    localStorage.setItem('quoteData', JSON.stringify(quoteData));
  }, [currentQuote, favorites]);

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
            {currentQuote && (
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
            )}
          </div>
          <div className={styles.favorites}>
            {!!favorites.length ? (
              favorites.map((favoriteQuote) => {
                return (
                  <div
                    key={favoriteQuote.id}
                    className={styles.favoriteQuote}
                    onDoubleClick={() =>
                      removeFavoriteQuote(
                        currentQuote,
                        favoriteQuote,
                        favorites,
                        setFavorites
                      )
                    }
                  >
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
