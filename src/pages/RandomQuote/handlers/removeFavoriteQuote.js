function removeFavoriteQuote(
  currentQuote,
  favoriteQuote,
  favorites,
  setFavorites
) {
  if (favorites.some((favoriteQuote) => favoriteQuote.id === currentQuote.id)) {
    currentQuote.isFavorite = !currentQuote.isFavorite;
  }
  return setFavorites(
    favorites.filter(
      (selectedFavoriteQuote) => selectedFavoriteQuote.id !== favoriteQuote.id
    )
  );
}

export default removeFavoriteQuote;
