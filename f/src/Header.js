import React from "react";

class Header extends React.Component {
  state = {
    query: "",
    searchResults: "",
  };

  getMovies = (e) => {
    this.props.searchmovie(this.state.query);

  };

  updateSearch = (e) => {
    
    this.setState({ query: e.target.value }, () => {
      this.getMovies(e);
    });

  };

  render = () => {
    return (
      <form id="search" className="search">
        <input
          type="search"
          placeholder="Search for a title..."
          value={this.state.query}
          onChange={this.updateSearch}
          onInput={(e) => this.getMovies(e)}
        />

        <div className="searchResults">
          {this.props.movies.length < 100
            ? `Found ${this.props.movies.length} movies with the query ${this.state.query}`
            : ""}
        </div>
      </form>
    );
  };
}

export default Header;
