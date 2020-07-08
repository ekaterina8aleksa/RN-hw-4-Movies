import { React, Component } from "react";

class SearchBar extends Component {
  state = { query: "" };

  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { query } = this.state;
    this.props.onSubmit(query);
    this.setState({ query: "" });
  };

  render() {
    const { query } = this.state;
    return (
      <header className="bar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="searchButton">
            <span className="searchButtonLabel">Search</span>
          </button>

          <input
            className="searchInput"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
export default SearchBar;
