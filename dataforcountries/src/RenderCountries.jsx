import CountryName from "./CountryName";
import Country from "./Country";
import InfoMessage from "./InfoMessage";
import service from "./service";

const RenderCountries = ({ countries }) => {
  if (countries.length === 0) {
    return <InfoMessage message={"No countries found with that name"} />;
  } else if (countries.length === 1) {
    return <Country country={countries[0]} />;
  } else if (countries.length <= 10) {
    return countries.map((countryFromList) => (
      <CountryName
        key={countryFromList.name.official}
        name={countryFromList.name.common}
      />
    ));
  } else {
    return <InfoMessage message={"Too many matches, specify another filter"} />;
  }
};

export default RenderCountries;
