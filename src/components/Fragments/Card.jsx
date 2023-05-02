import * as React from "react";
import PropTypes from "prop-types";

const Card = ({ country }) => {
  return (
    <div className="flex flex-col w-[250px] h-[350px] bg-white rounded-lg justify-between pb-5 overflow-hidden">
      <img src={country.flags?.svg} className="h-[175px] object-cover" />
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
  );
};

const CardList = ({ selectedRegion }) => {
  const [countries, setCountries] = React.useState([]);
  const cardRef = React.useRef(null);

  const searchKeyword = "Kingdom of Lesotho";
  const [filterRegion, setFilterRegion] = React.useState("");

  React.useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error(error);
      });

    setFilterRegion(selectedRegion);

    if (cardRef.current) {
      cardRef.current.scrollIntoView();
    }
  }, [searchKeyword, selectedRegion]);

  return (
    <>
      <div className="h-[299px] w-[250px] bg-[#fafafa] fixed top-0 -z-10"></div>
      <div className="space-y-[25px] relative overflow-auto top-[299px] -z-20">
        {countries
          .filter((country) =>
            filterRegion ? country.region === filterRegion : true
          )
          .map((country) => (
            <Card
              key={country.cca2}
              country={country}
              ref={country.name?.official === searchKeyword ? cardRef : null}
            />
          ))}
      </div>
    </>
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

CardList.propTypes = {
  selectedRegion: PropTypes.string.isRequired,
};

export default CardList;
