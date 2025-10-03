import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

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

export default fetchQuote;
