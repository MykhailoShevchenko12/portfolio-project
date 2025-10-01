import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import RandomQuote from './pages/RandomQuote/RandomQuote';
import BookLibrary from './pages/BookLibraryApp/BookLibrary';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="random-quotes" element={<RandomQuote />} />
          <Route path="book-library" element={<BookLibrary />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
