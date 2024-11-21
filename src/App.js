import React, { useState, useEffect } from 'react';
import Header from './Header';
import Search from './Search';
import Movie from './Movie';
import './style.css';


const API_KEY = 'daf37fd5';
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchMessage, setSearchMessage] = useState("");

  const fetchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    if (data.Response === "True") {
      setMovies(data.Search);
      setSearchMessage(`Hasil pencarian dari: "${title}"`);
    } else {
      setMovies([]);
      setSearchMessage(`Tidak menemukan hasil untuk: "${title}"`);
    }
  };

  useEffect(() => {
    fetchMovies("Avenger");
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term.trim()) {
      fetchMovies(term);
    }
  };

  return (
    <div>
      <Header title="MovieLand" />
      <Search onSearch={handleSearch} />
      <p style={{ textAlign: "center", marginTop: "10px", color: "gray" }}>
        {searchMessage}
      </p>
      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map((movie) => <Movie key={movie.imdbID} movie={movie} />)
        ) : (
          <p style={{ textAlign: "center", marginTop: "20px", color: "red" }}>
            Tidak ada film yang ditemukan.
          </p>
        )}
      </div>
    </div>
  );
};

export default App;

