import * as React from "react";

import Card from "./components/Fragments/Card";
import Filter from "./components/Fragments/Filter";
import Navbar from "./components/Fragments/Navbar";
import SearchBox from "./components/Fragments/SearchBox";

function App() {
  const [selectedRegion, setSelectedRegion] = React.useState("");
  const [searchRegion, setSearchRegion] = React.useState("");

  const handleSelectRegion = (region) => {
    setSelectedRegion(region);
  };

  const handleSearchRegion = (region) => {
    setSearchRegion(region);
  };

  return (
    <main className="flex flex-col justify-center items-center">
      <Navbar />
      <SearchBox onSearchRegion={handleSearchRegion} />
      <Filter onSelectRegion={handleSelectRegion} />
      <Card selectedRegion={selectedRegion} searchRegion={searchRegion} />
    </main>
  );
}

export default App;
