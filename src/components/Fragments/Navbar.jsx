import MoonOutline from "../../assets/moon-outline.svg";
const Navbar = () => {
  return (
    <nav className="flex justify-center items-center w-screen h-20 bg-white drop-shadow-sm mb-7 px-[18px] right-0 left-0 fixed top-0">
      <div className="flex w-screen justify-between">
        <h1 className="font-extrabold h-fit self-end cursor-pointer">
          Where in the world?
        </h1>
        <div className="flex h-fit items-center cursor-pointer">
          <img src={MoonOutline} className="w-5 mr-3" />
          <span className="font-semibold self-end text-sm">Dark Mode</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
