import * as React from "react";
import PropTypes from "prop-types";

import SelectBox from "../Elements/Filter/SelectBox";
import CountryList from "../Elements/Filter/CountryList";

const Filter = (props) => {
  const [isActive, setIsActive] = React.useState(false);
  const [selectedRegion, setSelectedRegion] = React.useState("");

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleSelectRegion = (region) => {
    setSelectedRegion(region);
    setIsActive(false);
    props.onSelectRegion(region);
  };

  return (
    <>
      <SelectBox handleToggle={handleToggle} selectedRegion={selectedRegion} />
      <CountryList
        isActive={isActive}
        handleSelectRegion={handleSelectRegion}
      />
    </>
  );
};

Filter.propTypes = {
  onSelectRegion: PropTypes.func.isRequired,
};

export default Filter;
