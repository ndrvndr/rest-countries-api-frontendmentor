import * as React from "react";

import Card from "../components/Fragments/Card";
import Filter from "../components/Fragments/Filter";
import SearchBox from "../components/Fragments/SearchBox";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const HomePage = () => {
  const [selectedRegion, setSelectedRegion] = React.useState("");
  const [searchRegion, setSearchRegion] = React.useState("");

  const handleSelectRegion = (region) => {
    setSelectedRegion(region);
  };

  const handleSearchRegion = (region) => {
    setSearchRegion(region);
  };
  return (
    <AuthLayouts>
      <SearchBox onSearchRegion={handleSearchRegion} />
      <Filter onSelectRegion={handleSelectRegion} />
      <Card selectedRegion={selectedRegion} searchRegion={searchRegion} />
    </AuthLayouts>
  );
};

export default HomePage;
