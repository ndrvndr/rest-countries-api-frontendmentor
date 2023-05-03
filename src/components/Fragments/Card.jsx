import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ selectedRegion, searchRegion }) => {
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
    <>
      <div className="h-[299px] w-[250px] bg-[#fafafa] fixed top-0 z-10"></div>
      <div className="space-y-[25px] relative overflow-auto top-[299px] pb -[25px] cursor-pointer">
        {countries
          .filter((country) =>
            selectedRegion ? country.region === selectedRegion : true
          )
          .filter((country) =>
            searchRegion
              ? country.name?.official
                  .toLowerCase()
                  .includes(searchRegion.toLowerCase())
              : true
          )
          .map((country) => (
            <Link
              to="/detailCountry"
              key={country.cca2}
              className="flex flex-col w-[250px] h-[350px] bg-white rounded-lg justify-between pb-5 overflow-hidden cursor-pointer"
            >
              <img
                src={country.flags?.svg}
                className="h-[175px] object-cover cursor-pointer"
              />
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
            </Link>
          ))}
      </div>
    </>
  );
};

Card.propTypes = {
  selectedRegion: PropTypes.string.isRequired,
  searchRegion: PropTypes.string.isRequired,
};

export default Card;
