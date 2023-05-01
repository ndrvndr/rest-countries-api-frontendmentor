import * as React from "react";
import SelectBox from "../Elements/Filter/SelectBox";
import CountryList from "../Elements/Filter/CountryList";

const Filter = () => {
  const [isActive, setIsActive] = React.useState(false);
  const [selectedRegion, setSelectedRegion] = React.useState("");

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleSelectRegion = (region) => {
    setSelectedRegion(region);
    setIsActive(false);
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
export default Filter;
