import { createContext, useContext } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const QuoteContext = createContext();

const QuoteProvider = ({ children }) => {
  async function fetchQuote(setCurrentQuote) {
    try {
      const response = await axios.get(
        'https://quoteslate.vercel.app/api/quotes/random'
      );
      const { quote, author } = response.data;
      const newQuote = {
        quote,
        author,
        isFavorite: false,
        id: uuidv4(),
      };
      setCurrentQuote(newQuote);
    } catch (error) {
      console.log(error);
    }
  }

  function toggleFavorites(currentQuote, setCurrentQuote, setFavorites) {
    if (currentQuote) {
      const { id, quote, author, isFavorite } = currentQuote;
      const newFavoriteQuote = {
        id,
        quote,
        author,
        isFavorite: !isFavorite,
      };
      setCurrentQuote({
        ...currentQuote,
        isFavorite: !currentQuote.isFavorite,
      });
      setFavorites((favorites) => {
        const exist = favorites.some(
          (favoriteQuote) => favoriteQuote.id === currentQuote.id
        );
        if (exist) {
          return favorites.filter(
            (favoriteQuote) => favoriteQuote.id !== currentQuote.id
          );
        } else {
          return [...favorites, newFavoriteQuote];
        }
      });
    }
  }

  function initialState() {
    const quoteDataFromLocalStorage = localStorage.getItem('quoteData');
    const parsedQuoteData = JSON.parse(quoteDataFromLocalStorage);
    return parsedQuoteData
      ? parsedQuoteData
      : { currentQuote: null, favorites: [] };
  }

  function removeFavoriteQuote(
    currentQuote,
    favoriteQuote,
    favorites,
    setFavorites
  ) {
    if (currentQuote.id === favoriteQuote.id) {
      currentQuote.isFavorite = !currentQuote.isFavorite;
    }
    return setFavorites(
      favorites.filter(
        (selectedFavoriteQuote) => selectedFavoriteQuote.id !== favoriteQuote.id
      )
    );
  }

  const value = {
    toggleFavorites,
    fetchQuote,
    initialState,
    removeFavoriteQuote,
  };
  return (
    <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>
  );
};

export const useQuoteContext = () => useContext(QuoteContext);

export default QuoteProvider;
