import React from "react";
import Movie from "./Movie";

export default function Genre(props) {
  const movieList = props.movies.filter((movie) =>
    movie[`genre_ids`].includes(props.id)
  );

  return (
    <>
      <div className="titleList" key={props.id}>
        <div className="title">
          <h1>{props.name}</h1>
          <div className="titles-wrapper">
            {movieList.map((movie) => (
              <Movie
                movie={movie}
                key={movie.id}
                id={movie.id}
                updateMyList={props.updateMyList}
                searchmovie={props.searchmovie}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
