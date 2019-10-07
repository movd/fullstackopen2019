import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNameChange = e => setNewName(e.target.value);
  const handleNumberChange = e => setNewNumber(e.target.value);

  const handleClick = e => {
    e.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber
    };

    if (persons.some(p => p.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(newPerson));
    }
  };

  const renderPersons = persons.map(p => (
    <div key={p.name}>
      {p.name} {p.number}
    </div>
  ));

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name:{" "}
          <input type="text" value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number:{" "}
          <input type="text" value={newNumber} onChange={handleNumberChange} />
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
