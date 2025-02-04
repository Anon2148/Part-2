import { useEffect, useState } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import personService from "./services";
import Notification from "./Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [infoMessage, setInfoMessage] = useState(null);
  const [typeMessage, setTypeMessage] = useState("success");

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const personsToShow =
    newFilter === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(newFilter.toLowerCase())
        );

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const addNewPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    };
    if (
      persons.filter((person) => person.name === newPerson.name).length === 1 &&
      window.confirm(
        `${newPerson.name} is already added to phonebook, replace the old number with a new one?`
      )
    ) {
      const person = persons.find((p) => p.name === newName);
      const updatedPerson = { ...person, number: newNumber };
      personService
        .update(updatedPerson.id, updatedPerson)
        .then((response) => {
          setPersons(
            persons.map((p) => (p.id !== updatedPerson.id ? p : response))
          );
        })
        .catch((error) => {
          setTypeMessage("error");
          setInfoMessage(
            `Information from ${updatedPerson.name} has already been removed from server`
          );
          setPersons(persons.filter((p) => p.id !== updatedPerson.id));
        });
      setTypeMessage("success");
      setInfoMessage(`Updated phone number of ${updatedPerson.name}`);
    } else {
      personService.create(newPerson).then((addedPerson) => {
        setPersons(persons.concat(addedPerson));
      });
      setTypeMessage("success");
      setInfoMessage(`Added ${newPerson.name}`);
    }
    setNewName("");
    setNewNumber("");
    setNewFilter("");
    setTimeout(() => {
      setInfoMessage(null);
    }, 5000);
  };

  const handleDeletion = (id) => {
    const personToDelete = persons.find((p) => p.id === id);
    if (window.confirm(`Delete ${personToDelete.name}?`)) {
      personService.deletePerson(id);
      setPersons(persons.filter((p) => p.id !== id));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={infoMessage} type={typeMessage} />
      <Filter handleFilterChange={handleFilterChange} newFilter={newFilter} />
      <h3>add a new</h3>
      <PersonForm
        handleChangeName={handleChangeName}
        handleChangeNumber={handleChangeNumber}
        addNewPerson={addNewPerson}
        newName={newName}
        newNumber={newNumber}
      />
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} handleDeletion={handleDeletion} />
    </div>
  );
};

export default App;
