import React from "react";

function Movie({ title, language, image, genre }) {
  return (
    <div className="movie-card">
      <div className="movie">
        <h1>{title}</h1>
        <ul>
          {genre.map((gen) => (
            <li>{gen}</li>
          ))}
        </ul>
        <p>{language}</p>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Movie;
