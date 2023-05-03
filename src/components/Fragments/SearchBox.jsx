import * as React from "react";
import PropTypes from "prop-types";
import SearchOutline from "../../assets/search-outline.svg";

const SearchBox = (props) => {
  const [searchRegion, setSearchRegion] = React.useState("");
  const handleInputChange = (event) => {
    setSearchRegion(event.target.value);
    props.onSearchRegion(event.target.value);
  };

  return (
    <div className="flex w-[90%] h-16 rounded-lg drop-shadow-sm bg-white pl-7 mb-10 fixed top-[105px] z-20">
      <img src={SearchOutline} className="w-5 mr-7 cursor-pointer"></img>
      <input
        type="text"
        className="outline-none border-none bg-transparent text-sm"
        placeholder="Search for a country..."
        value={searchRegion}
        onChange={handleInputChange}
      ></input>
    </div>
  );
};

SearchBox.propTypes = {
  onSearchRegion: PropTypes.func.isRequired,
};

export default SearchBox;
