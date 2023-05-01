import SearchOutline from "../../assets/search-outline.svg";

const SearchBox = () => {
  return (
    <div className="flex w-[90%] h-16 rounded-lg drop-shadow-sm bg-white pl-7 mb-10 fixed top-[105px]">
      <img src={SearchOutline} className="w-5 mr-7 cursor-pointer"></img>
      <input
        type="text"
        className="outline-none border-none bg-transparent text-sm"
        placeholder="Search for a country..."
      ></input>
    </div>
  );
};

export default SearchBox;
