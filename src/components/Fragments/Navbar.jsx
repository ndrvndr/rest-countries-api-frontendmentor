import Title from "../Elements/Navbar/Title";
import ThemeSwitcher from "../Elements/Navbar/ThemeSwitcher";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center w-screen h-20 bg-white drop-shadow-sm mb-7 px-4">
      <div className="flex w-screen justify-between">
        <Title />
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
