import Card from "./components/Fragments/Card";
import Filter from "./components/Fragments/Filter";
import Navbar from "./components/Fragments/Navbar";
import SearchBox from "./components/Fragments/SearchBox";

function App() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Navbar />
      <SearchBox />
      <Filter />
      <Card />
    </main>
  );
}

export default App;
