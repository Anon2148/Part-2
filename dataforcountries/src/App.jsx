import { useEffect, useState } from "react";
import countryService from "./service";
import RenderCountries from "./RenderCountries";

function App() {
  const [searchCountry, setSearchCountry] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    countryService
      .getAll()
      .then((allCountries) => {
        setCountries(allCountries);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const countriesToShow =
    searchCountry === ""
      ? countries
      : countries.filter(
          (country) =>
            country.name.common
              .toLowerCase()
              .indexOf(searchCountry.toLowerCase()) >= 0
        );

  const handleSearchCountry = (event) => {
    setSearchCountry(event.target.value);
  };

  return (
    <div>
      find countries{" "}
      <input value={searchCountry} onChange={handleSearchCountry} />
      <br />
      <RenderCountries
        countries={countriesToShow}
        setSearchCountry={setSearchCountry}
      />
    </div>
  );
}

export default App;
