import React from "react";

const Countries = ({ countries }) => {
  const renderCountries = countries.map(c => <div key={c.name}>{c.name}</div>);
  const renderSingleCountry = countries.map(c => (
    <div key={c.name}>
      <h1>{c.name}</h1>
      <div>capital {c.capital}</div>
      <div>population {c.population}</div>
      <h2>languages</h2>
      <ul>
        {c.languages.map(l => (
          <li key={l.iso639_2}>{l.name}</li>
        ))}
      </ul>
      <img src={c.flag} alt={`Flag of ${c.name}`} width="120" />
    </div>
  ));

  return (
    <div className="Countries">
      {countries.length === 1 ? (
        <div>{renderSingleCountry}</div>
      ) : (
        <div>{renderCountries}</div>
      )}
    </div>
  );
};
export default Countries;
