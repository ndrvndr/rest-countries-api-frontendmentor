import * as React from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Elements/Button";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const CountryDetails = () => {
  const { id } = useParams();
  const [country, setCountry] = React.useState([]);
  console.log(country);

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
              <span>{country.name?.common}</span>
            </div>
            <div>
              <span className="font-semibold">Population: </span>
              <span>{country.population}</span>
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
              {/* <span>{Object.values(country.languages).join(", ")}</span> */}
            </div>
            <div>
              <span className="font-semibold">Languages: </span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </AuthLayouts>
  );
};

export default CountryDetails;
