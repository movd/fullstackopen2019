import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleChange = e => setNewName(e.target.value);

  const handleClick = e => {
    e.preventDefault();
    const newPerson = {
      name: newName
    };

    if (persons.some(p => p.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(newPerson));
    }
  };

  const renderPersons = persons.map(p => <div key={p.name}>{p.name}</div>);

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input type="text" value={newName} onChange={handleChange} />
        </div>
        <div>
          <button onClick={handleClick}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {renderPersons}
    </div>
  );
};

export default App;
