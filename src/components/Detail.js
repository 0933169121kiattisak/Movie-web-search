import React from "react";

function Detail({ movie, onClose }) {
    return (
      <div className="movie-detail">
        <div className="detail-content">
          <div className="detail-header">
            <h2>{movie.Title}</h2>
            <button onClick={onClose} className="close-button">×</button>
          </div>
          <div className="detail-info">
            <img 
              src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.png'} 
              alt={movie.Title}
            />
            <div className="detail-text">
              <p><strong>Year:</strong> {movie.Year}</p>
              <p><strong>Rating:</strong> {movie.imdbRating}</p>
              <p><strong>Director:</strong> {movie.Director}</p>
              <p><strong>Plot:</strong> {movie.Plot}</p>
              <p><strong>Cast:</strong> {movie.Actors}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Detail;