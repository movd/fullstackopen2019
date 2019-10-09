import React, { useState, useEffect } from "react";
import Weather from "./Weather";

// "http://api.weatherstack.com/current?access_key=cd9eedb3c82391e50726edbba1f57516&query=Berlin"

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
      <h2>Weather in {capital}</h2>
      <Weather capital={capital} />
    </div>
  );
};

export default Country;
