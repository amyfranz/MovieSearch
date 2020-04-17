import React from "react";

export default function Search({ handleSubmit, query, handleQueryChange }) {
  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Search for a movie....."
        className="searchbar"
        value={query}
        onChange={(e) => handleQueryChange(e.target.value)}
        required
      />
      <button type="submit" className="btn btn-light">
        Submit
      </button>
    </form>
  );
}
