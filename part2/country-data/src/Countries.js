import React, { useState } from "react";
import Country from "./Country";

const Countries = ({ countries }) => {
  const [showDetails, setShowDetails] = useState([]);

  const toggleDetails = idx => {
    let update = [...showDetails];
    update[idx] = !update[idx];
    setShowDetails(update);
  };
  console.log(showDetails);
  const renderCountries = countries.map((c, idx) => (
    <div key={c.name}>
      {c.name} <button onClick={() => toggleDetails(idx)}>show</button>
      {showDetails[idx] && <Country country={c} />}
    </div>
  ));

  return (
    <div className="Countries">
      {countries.length === 1 ? (
        <Country country={countries[0]} />
      ) : (
        <div>{renderCountries}</div>
      )}
    </div>
  );
};
export default Countries;
