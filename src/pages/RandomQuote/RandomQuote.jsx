import { MdFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';

import axios from 'axios';

import styles from './RandomQuote.module.css';
import { useState } from 'react';

const RandomQuote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const getRandomQuote = async () => {
    try {
      const response = await axios.get(
        'https://quoteslate.vercel.app/api/quotes/random'
      );
      const { quote, author } = response.data;
      setQuote(quote);
      setAuthor(author);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <h2>Random Quote App</h2>
        <div className={styles.quoteContainer}>
          <div className={styles.quote}>
            <p className={styles.quoteText}>
              {quote ? quote : 'Click the button to get a random quote!'}
            </p>
            <p className={styles.quoteAuthor}>
              © {author ? author : 'from admine with love'}
            </p>
          </div>
          <div className={styles.buttons}>
            <button className={styles.generateBtn} onClick={getRandomQuote}>
              Get random quote
            </button>
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
