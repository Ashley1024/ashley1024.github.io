import React from "react";
import * as MovieAPI from "./MovieAPI";
import Movie from "./Movie";

class MyList extends React.Component {
  state = {
    selectedMovies: [],
  };

  componentDidMount() {
    MovieAPI.getAll().then((movies) => {
      this.setState({
        selectedMovies: movies.filter((movie) => movie.my_list === true),
      });
    });
  }

  updateMyList = (movie) => {
    if (movie.my_list) {
      MovieAPI.removeFromList(movie).then(() => {
        MovieAPI.getAll().then((movies) => {
          this.setState({
            selectedMovies: movies.filter((movie) => movie.my_list === true),
          });
        });
      });
    }
  };

  render = () => {
    return (
      <>
        <div className="titleList">
          <div className="title">
            <h1>My List</h1>
            <div className="titles-wrapper">
              {this.state.selectedMovies.map((movie) => (
                <Movie
                  updateMyList={this.updateMyList}
                  movie={movie}
                  key={movie.id}
                />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };
}

export default MyList;
