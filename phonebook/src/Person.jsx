const Person = ({ person, handleDeletion }) => {
  const handleDeletion2 = () => {
    handleDeletion(person.id);
  };
  return (
    <>
      {person.name} {person.number}{" "}
      <button onClick={handleDeletion2}>Delete</button>
      <br />
    </>
  );
};

export default Person;
