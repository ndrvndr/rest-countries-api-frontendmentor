import PropTypes from "prop-types";
const CountryList = ({ isActive, handleSelectRegion }) => {
  return (
    <ul
      className={`w-[60%] h-fit rounded-lg drop-shadow-sm self-start ml-[18px] bg-white ${
        isActive ? "flex" : "hidden"
      } flex-col p-4 space-y-4 font-semibold text-sm fixed top-[280px] z-20 sm:w-[15%] sm:self-end sm:top-[175px] sm:mr-5`}
    >
      <li
        className="cursor-pointer"
        onClick={() => handleSelectRegion("Africa")}
      >
        Africa
      </li>
      <li
        className="cursor-pointer"
        onClick={() => handleSelectRegion("Americas")}
      >
        America
      </li>
      <li className="cursor-pointer" onClick={() => handleSelectRegion("Asia")}>
        Asia
      </li>
      <li
        className="cursor-pointer"
        onClick={() => handleSelectRegion("Europe")}
      >
        Europe
      </li>
      <li
        className="cursor-pointer"
        onClick={() => handleSelectRegion("Oceania")}
      >
        Oceania
      </li>
      <li className="cursor-pointer" onClick={() => handleSelectRegion("")}>
        All
      </li>
    </ul>
  );
};

CountryList.propTypes = {
  isActive: PropTypes.bool.isRequired,
  handleSelectRegion: PropTypes.func.isRequired,
};

export default CountryList;
