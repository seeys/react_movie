import React from 'react';
import ProtoTypes from "prop-types";
import "./App.css";

function Movie({year, title, summary, poster, genres}){
    return (
    <div className="movie">
        <img src={poster} alt={title} title={title}/>
        <div className="movie_data">
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <ul className="genres">
                {genres.map((genre, index) => (
                    <li key = {index} className="genres_genre">{genre}</li>
                ))}
            </ul>
            <p className="movie_summary">{summary.slice(0,140)}...</p>
            
        </div>
    </div>
    );
}

Movie.prototypes = {
    id: ProtoTypes.number.isRequired,
    year: ProtoTypes.number.isRequired,
    title: ProtoTypes.string.isRequired,
    summary: ProtoTypes.string.isRequired,
    poster: ProtoTypes.string.isRequired,
    genres: ProtoTypes.arrayOf(ProtoTypes.string).isRequired
};

export default Movie;