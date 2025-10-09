import { v4 as uuidv4 } from 'uuid';

function createBookWithID({ title, author }) {
  return {
    title,
    author,
    isFavorite: false,
    id: uuidv4(),
  };
}

export default createBookWithID;
