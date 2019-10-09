import React from "react";

const Search = ({ searchFor, handleChange }) => {
  return (
    <div className="Search">
      find countries <input value={searchFor} onChange={handleChange} />
    </div>
  );
};

export default Search;
