import * as React from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Elements/Button";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const CountryDetails = () => {
  const { id } = useParams();
  const [country, setCountry] = React.useState([]);

  React.useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const country = data.filter((item) => item.cca2 === id)[0];
        setCountry(country);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <AuthLayouts>
      <Button />
      <div className="relative top-[200px] px-[18px] pb-8 w-full">
        <img src={country.flags?.svg} className="w-full h-fit" />
        <h1 className="font-extrabold my-8"></h1>
        <div className="space-y-8">
          <div className="space-y-3">
            <div>
              <span className="font-semibold">Native Name: </span>
              <span>
                {country && country.name && country.name.nativeName
                  ? country.name.nativeName[
                      Object.keys(country.name.nativeName)[
                        Object.keys(country.name.nativeName).length - 1
                      ]
                    ].common
                  : "Not available"}
              </span>
            </div>
            <div>
              <span className="font-semibold">Population: </span>
              <span>
                {country.population
                  ? country.population.toLocaleString()
                  : "Not available"}
              </span>
            </div>
            <div>
              <span className="font-semibold">Region: </span>
              <span>{country.region}</span>
            </div>
            <div>
              <span className="font-semibold">Sub Region: </span>
              <span>{country.subregion}</span>
            </div>
            <div>
              <span className="font-semibold">Capital: </span>
              <span>{country.capital}</span>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <span className="font-semibold">Top Level Domain: </span>
              <span>{country.tld}</span>
            </div>
            <div>
              <span className="font-semibold">Currencies: </span>
              <span>
                {country.currencies
                  ? Object.values(country.currencies)[0].name
                  : ""}
              </span>
            </div>
            <div>
              <span className="font-semibold">Languages: </span>
              <span>
                {country.languages
                  ? Object.values(country.languages).reverse().join(", ")
                  : ""}
              </span>
            </div>
          </div>

          <div>
            <span className="font-semibold text-lg">Border Countries:</span>
            <div className="mt-3 flex flex-wrap justify-between">
              {/* <div className="bg-white w-full drop-shadow-2xl">
                <span>{country.borders}</span>
              </div> */}
              {country && country.borders ? (
                country.borders.map((border, index) => (
                  <div
                    key={index}
                    className="bg-white w-[101px] drop-shadow-2xl py-3 mb-3 flex justify-center"
                  >
                    <span>{border}</span>
                  </div>
                ))
              ) : (
                <div>No border countries found</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AuthLayouts>
  );
};

export default CountryDetails;
