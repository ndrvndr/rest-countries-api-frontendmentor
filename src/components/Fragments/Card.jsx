import * as React from "react";
import PropTypes from "prop-types";

const Card = ({ country }) => {
  return (
    <div className="mt-4">
      <div className="flex flex-col w-[270px] h-[350px] bg-white rounded-lg justify-between pb-5 overflow-hidden">
        <img src={country.flags?.svg} className="h-[175px]" />
        <h1 className="font-extrabold mx-5">{country.name?.official}</h1>
        <div className="flex flex-col space-y-3 mx-5">
          <div>
            <span className="font-semibold">Population: </span>
            <span>{country.population}</span>
          </div>
          <div>
            <span className="font-semibold">Region: </span>
            <span>{country.region}</span>
          </div>
          <div>
            <span className="font-semibold">Capital: </span>
            <span>{country.capital}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardList = () => {
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {countries.map((country) => (
        <Card key={country.cca2} country={country} />
      ))}
    </div>
  );
};

Card.propTypes = {
  country: PropTypes.shape({
    flags: PropTypes.shape({
      svg: PropTypes.string,
    }),
    name: PropTypes.shape({
      official: PropTypes.string,
    }),
    population: PropTypes.number,
    region: PropTypes.string,
    capital: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  }).isRequired,
};

export default CardList;
