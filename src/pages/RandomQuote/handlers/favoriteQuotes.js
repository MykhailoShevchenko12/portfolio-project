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

export default toggleFavorites;
