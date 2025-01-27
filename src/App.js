// App.js
import { useState } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Detail from './components/Detail';
import './App.css';

function App() {
  const [state, setState] = useState({
    searchQuery: '',
    results: [],
    selected: {}
  });

  const apiUrl = "https://www.omdbapi.com/?apikey=c7ab2c0b"; // Replace with your API key

  const handleSearchInput = (e) => {
    setState(prev => ({
      ...prev,
      searchQuery: e.target.value
    }));
  };

  const handleSearch = async (e) => {
    if (e.key === "Enter" && state.searchQuery) {
      try {
        const response = await axios.get(`${apiUrl}&s=${state.searchQuery}`);
        if (response.data.Search) {
          setState(prev => ({
            ...prev,
            results: response.data.Search
          }));
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }
  };

  const handleMovieSelect = async (id) => {
    try {
      const response = await axios.get(`${apiUrl}&i=${id}`);
      setState(prev => ({
        ...prev,
        selected: response.data
      }));
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  const handleCloseDetail = () => {
    setState(prev => ({
      ...prev,
      selected: {}
    }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Search App</h1>
      </header>
      <main>
        <Search 
          value={state.searchQuery}
          onInputChange={handleSearchInput}
          onKeyPress={handleSearch}
        />
        <div className="movies-grid">
          {state.results.map(movie => (
            <div 
              key={movie.imdbID}
              className="movie-card"
              onClick={() => handleMovieSelect(movie.imdbID)}
            >
              <img 
                src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.png'} 
                alt={movie.Title}
              />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          ))}
        </div>
        {Object.keys(state.selected).length > 0 && (
          <Detail 
            movie={state.selected} 
            onClose={handleCloseDetail}
          />
        )}
      </main>
    </div>
  );
}

export default App;

