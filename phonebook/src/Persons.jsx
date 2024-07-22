import Person from "./Person";

const Persons = ({ personsToShow, handleDeletion }) => {
  return personsToShow.map((person) => (
    <Person key={person.id} person={person} handleDeletion={handleDeletion} />
  ));
};

export default Persons;
