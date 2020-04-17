import React, { Component } from "react";
import Search from "./component/Search";
import DisplayMovies from "./container/DisplayMovies";

export default class App extends Component {
  state = { movies: "", query: "", error: "" };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Movie Database</h1>
        </header>
        <main>
          <Search
            handleSubmit={this.handleSubmit}
            query={this.state.query}
            handleQueryChange={this.handleQueryChange}
          />
          {this.state.error ? (
            <h1 className="error">{this.state.error}</h1>
          ) : null}
          {this.state.movies !== "" ? (
            <DisplayMovies movies={this.state.movies} />
          ) : null}
        </main>
      </div>
    );
  }
  handleQueryChange = (query) => {
    this.setState({ query });
  };
  fetchMovies = () => {
    const API = `http://www.omdbapi.com/?apikey=979a7ef5&t=${this.state.query}`;
    fetch(API)
      .then((res) => res.json())
      .then((movies) => {
        movies.Error
          ? this.setState({ movies: "", error: "The movie does not exist." })
          : this.setState({
              movies: movies,
              error: "",
            });
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchMovies();
    this.setState({ query: "" });
  };
}
