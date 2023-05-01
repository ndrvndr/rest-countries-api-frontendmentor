import MoonOutline from "../../../assets/moon-outline.svg";

const ThemeSwitcher = () => {
  return (
    <div className="flex h-fit items-center cursor-pointer">
      <img src={MoonOutline} className="w-5 mr-3" />
      <span className="font-semibold self-end text-sm">Dark Mode</span>
    </div>
  );
};

export default ThemeSwitcher;
