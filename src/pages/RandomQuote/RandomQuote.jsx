import { MdFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { useQuoteContext } from '../../context/RandomQuoteContext';
import './RandomQuote.css';

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
        <div className="quote-container">
          <div className="quote">
            <p className="quote-text">
              {currentQuote
                ? currentQuote.quote
                : 'Click the button to get a random quote!'}
            </p>
            <p className="quote-author">
              © {currentQuote ? currentQuote.author : 'from admine with love'}
            </p>
          </div>
          <div className="quote-buttons">
            <button
              className="quote-generate-btn"
              onClick={() => fetchQuote(setCurrentQuote)}
            >
              Get random quote
            </button>
            {currentQuote && (
              <button
                className="quote-favorite-btn"
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
          <div className="quote-favorites">
            {!!favorites.length ? (
              favorites.map((favoriteQuote) => {
                return (
                  <div
                    key={favoriteQuote.id}
                    className="favorite-quote"
                    onDoubleClick={() =>
                      removeFavoriteQuote(
                        currentQuote,
                        favoriteQuote,
                        favorites,
                        setFavorites
                      )
                    }
                  >
                    <p className="favorite-quote-text">{favoriteQuote.quote}</p>
                    <p className="favorite-quote-author">
                      © {favoriteQuote.author}
                    </p>
                  </div>
                );
              })
            ) : (
              <p className="none-favorite-quote">Обраних цитат немає</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RandomQuote;
