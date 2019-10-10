import React, { useState, useEffect } from "react";
import personsService from "./services/persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [nameFilter, setNameFilter] = useState("");

  const handleNameChange = e => setNewName(e.target.value);
  const handleNumberChange = e => setNewNumber(e.target.value);
  const handleFilterChange = e => setNameFilter(e.target.value);

  useEffect(() => {
    getPersons();
  }, []);

  const getPersons = async () => {
    setIsLoading(true);
    setPersons(await personsService.getData());
    setIsLoading(false);
  };

  const deletePerson = async ({ name, id }) => {
    window.confirm(`Delete ${name} (${id})?`);
    await personsService.deleteId(id);
    getPersons();
  };

  const handleClick = async e => {
    e.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber
    };

    if (persons.some(p => p.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      try {
        setPersons(
          persons.concat(await personsService.createPerson(newPerson))
        );
      } catch (error) {
        console.error(error);
      }
    }
  };

  const filterPersons = persons => {
    return persons.filter(p =>
      p.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={nameFilter} handleChange={handleFilterChange} />

      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        handleClick={handleClick}
      />
      <h3>Numbers</h3>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Persons persons={filterPersons(persons)} handleDelete={deletePerson} />
      )}
    </div>
  );
};

export default App;
