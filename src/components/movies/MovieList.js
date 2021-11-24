import React from "react";

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => (
                <div>
                    <img src={"https://image.tmdb.org/t/p/w500".concat(movie.poster_path)} ></img>
                </div>
            ))}
        </>
    )
}
export default MovieList;