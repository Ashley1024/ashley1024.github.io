import React from "react";
import * as MovieAPI from "./MovieAPI";
import Header from "./Header";
import Genre from "./Genre";
import MyList from "./MyList";
import { Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  state = {
    movies: [],
    genres: [],
    movieGenres: {},
    
  };

  componentDidMount() {
    MovieAPI.getAll().then((movies) => this.setState({ movies }));
    MovieAPI.genres().then((genres) => this.setState({ genres }));
    
  }

  updateMyList = (movie) => {
    if (movie.my_list) {
      MovieAPI.removeFromList(movie).then(() => {
        MovieAPI.getAll().then((movies) => {
          this.setState({ movies });
        });
      });
    } else {
      MovieAPI.addToList(movie).then(() => {
        MovieAPI.getAll().then((movies) => {
          this.setState({ movies });
        });
      });
    }
  };

  searchmovie = (query) => {
    this.setState((prevState) => ({
      movies: prevState.movies.filter(
        (movie) => movie.title.includes(query) || movie.overview.includes(query)
      ),
    }));
  };

  //todo sort genre
  compare = function (obj1, obj2) {
    let val1 = obj1.name;
    let val2 = obj2.name;
    if (val1 < val2) {
      return -1;
    } else if (val1 > val2) {
      return 1;
    } else {
      return 0;
    }
  };

  //create an obj which contain all genre and movies
  createGenMovie = () => {
    if (this.state.genres) {
      this.state.genres.sort(this.compare);
    } else {
      return "loading...";
    }
    let movieGenres = {};
    this.state.genres.forEach((genre) => {
      this.state.movies.forEach(function (movie) {
        if (movie.genre_ids.includes(genre.id)) {
          if (movieGenres[genre.name] === undefined) {
            movieGenres[genre.name] = [movie];
          } else {
            movieGenres[genre.name].push(movie);
          }
        }
      });
    });

    return movieGenres;
  };

  render = () => {
    this.state.movieGenres = this.createGenMovie();
    let movies = this.state.movies;

    let existGenre = [];
    for (let key in this.state.movieGenres) {
      existGenre.push(key);
    }
// create a genreList which contains all filtered movie genre
    let genreList = [
      ...this.state.genres.filter((genre) => existGenre.includes(genre.name)),
    ];

    return (
      <>
        <Switch>
          <Route exact path="/mylist" >
              <header className="header">
                <Link to="/" >
                  <img
                    src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
                    alt="netflix-font"
                    border="0" 
                  />
                </Link>
                <div id="navigation" className="navigation">
                  <nav>
                    <ul>
                      <Link to="/mylist">My List</Link>
                    </ul>
                  </nav>
                </div>
                <Header searchmovie={this.searchmovie} movies={movies} />
              </header>
              <MyList />
            </Route>

          <Route exact path="/" >       
            <header className="header">
              <Link to="/" >
                <img
                  src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
                  alt="netflix-font"
                  border="0"
                />
              </Link>
              <div id="navigation" className="navigation">
                <nav>
                  <ul>
                    <Link to="/myList">My List</Link>
                  </ul>
                </nav>
              </div>
              <Header searchmovie={this.searchmovie} movies={movies} />
            </header>

            {genreList.map((genre) => (
              <Genre
                key={genre.id}
                id={genre.id}
                name={genre.name}
                movies={movies}
                updateMyList={this.updateMyList}
                searchmovie={this.searchmovie}
              />
            ))}
          </Route>      
        </Switch>
      </>
    );
  };
}

export default App;
