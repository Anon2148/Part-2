import "./index.css";

const Country = ({ country }) => {
  const languages = Object.entries(country.languages).map((key) => {
    return <li key={key}>{key[1]}</li>;
  });
  return (
    <div>
      <h2>{country.name.common}</h2>
      <div className="mainInfo">
        capital {country.capital[0]}
        <br />
        area {country.area}
        <br />
      </div>
      <b>languages:</b>
      <ul>{languages}</ul>
      <img className="image" src={country.flags.png} alt={country.flags.alt} />
    </div>
  );
};

export default Country;
