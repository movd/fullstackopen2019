import React, { useState, useEffect } from "react";
import personsService from "./services/persons.module";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";

const { getData, createPerson, deleteId, updateId } = personsService;

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [nameFilter, setNameFilter] = useState("");
  const [notification, setNotification] = useState();

  const handleNameChange = e => setNewName(e.target.value);
  const handleNumberChange = e => setNewNumber(e.target.value);
  const handleFilterChange = e => setNameFilter(e.target.value);

  useEffect(() => {
    getPersons();
  }, []);

  const getPersons = async () => {
    setIsLoading(true);
    setPersons(await getData());
    setIsLoading(false);
  };

  const deletePerson = async ({ name, id }) => {
    window.confirm(`Delete ${name}?`);
    await deleteId(id);
    getPersons();
  };

  const updatePerson = async (newPerson, id) => {
    window.confirm(
      `${newPerson.name} is already added to phonebook, replace the old number with a new one?`
    );

    const updatedPerson = await updateId(newPerson, id);
    if (updatedPerson.error) {
      setNotification({
        type: "error",
        message: updatedPerson.error
      });
      clearNotification();
    } else {
      setNotification({
        type: "success",
        message: `Updated ${newPerson.name}`
      });
      getPersons();
      clearNotification();
    }
  };

  const clearNotification = () => {
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const handleClick = async e => {
    e.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber
    };

    if (persons.some(p => p.name === newName)) {
      let id = persons.find(p => p.name === newName).id;
      try {
        await updatePerson(newPerson, id);
      } catch (error) {
        setNotification({
          type: "error",
          message: `Information of ${newPerson.name} has already been removed from server`
        });
        getPersons();
        clearNotification();
      }
    } else {
      try {
        const createdPerson = await createPerson(newPerson);
        if (createdPerson.error) {
          console.log(createdPerson.error);
          setNotification({
            type: "error",
            message: createdPerson.error
          });
          clearNotification();
        } else {
          setPersons(persons.concat(createdPerson));
          setNotification({
            type: "success",
            message: `Added ${newPerson.name}`
          });
          clearNotification();
        }
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
      {notification ? (
        <Notification notification={notification} />
      ) : (
        <div></div>
      )}
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
