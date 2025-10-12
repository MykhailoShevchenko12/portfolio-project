import { Routes, Route } from 'react-router-dom';
import './App.css';
import AboutMe from './pages/AboutMe/AboutMe';
import RandomQuote from './pages/RandomQuote/RandomQuote';
import BookLibrary from './pages/BookLibraryApp/BookLibrary';
import Layout from './components/Layout/Layout';
import QuoteProvider from './context/RandomQuoteContext';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<AboutMe />} />
          <Route
            path="random-quotes"
            element={
              <QuoteProvider>
                <RandomQuote />
              </QuoteProvider>
            }
          />
          <Route path="book-library" element={<BookLibrary />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
