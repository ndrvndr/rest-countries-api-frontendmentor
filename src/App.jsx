import * as React from "react";

import Card from "./components/Fragments/Card";
import Filter from "./components/Fragments/Filter";
import Navbar from "./components/Fragments/Navbar";
import SearchBox from "./components/Fragments/SearchBox";

function App() {
  const [selectedRegion, setSelectedRegion] = React.useState("");

  const handleSelectRegion = (region) => {
    setSelectedRegion(region);
  };

  return (
    <main className="flex flex-col justify-center items-center">
      <Navbar />
      <SearchBox />
      <Filter onSelectRegion={handleSelectRegion} />
      <Card selectedRegion={selectedRegion} />
    </main>
  );
}

export default App;
