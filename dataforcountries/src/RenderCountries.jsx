import CountryName from "./CountryName";
import Country from "./Country";
import InfoMessage from "./InfoMessage";

const RenderCountries = ({ countries, setSearchCountry }) => {
  const handleClick = (event) => {
    setSearchCountry(event.target.value);
  };
  if (countries.length === 0) {
    return <InfoMessage message={"No countries found with that name"} />;
  } else if (countries.length === 1) {
    return <Country country={countries[0]} />;
  } else if (countries.length <= 10) {
    return countries.map((countryFromList, i) => (
      <CountryName
        key={i}
        country={countryFromList}
        handleClick={handleClick}
      />
    ));
  } else {
    return <InfoMessage message={"Too many matches, specify another filter"} />;
  }
};

export default RenderCountries;
