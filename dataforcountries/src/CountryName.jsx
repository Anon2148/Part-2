const CountryName = ({ country, handleClick }) => {
  return (
    <>
      {country.name.common}{" "}
      <button onClick={handleClick} value={country.name.common}>
        show
      </button>
      <br />
    </>
  );
};

export default CountryName;
