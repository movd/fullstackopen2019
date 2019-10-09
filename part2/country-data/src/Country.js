import React from "react";

const Country = ({ country }) => {
  const { name, capital, population, languages, flag } = country;
  return (
    <div className="Country">
      <h1>{name}</h1>
      <div>capital {capital}</div>
      <div>population {population}</div>
      <h2>languages</h2>
      <ul>
        {languages.map(l => (
          <li key={l.iso639_2}>{l.name}</li>
        ))}
      </ul>
      <img src={flag} alt={`Flag of ${name}`} width="120" />
    </div>
  );
};

export default Country;
