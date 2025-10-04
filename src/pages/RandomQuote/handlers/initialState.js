function initialState() {
  const quoteDataFromLocalStorage = localStorage.getItem('quoteData');
  const parsedQuoteData = JSON.parse(quoteDataFromLocalStorage);
  return parsedQuoteData
    ? parsedQuoteData
    : { currentQuote: null, favorites: [] };
}

export default initialState;
