import { useEffect, useState } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
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
      persons.filter((person) => person.name === newPerson.name).length !== 0
    ) {
      alert(`${newName} is already added to phonebook`);
    } else {
      axios
        .post("http://localhost:3001/persons", newPerson)
        .then((response) => {
          setPersons(persons.concat(newPerson));
          setNewName("");
          setNewNumber("");
          setNewFilter("");
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
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
      <Persons personsToShow={personsToShow} />
    </div>
  );
};

export default App;
