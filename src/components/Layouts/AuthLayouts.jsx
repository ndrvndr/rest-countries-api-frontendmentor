import MoonOutline from "../../assets/moon-outline.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children } = props;
  return (
    <main className="flex flex-col justify-center items-center sm:px-5">
      <nav className="flex justify-center items-center w-screen h-20 bg-white drop-shadow-sm mb-7 px-[18px] right-0 left-0 fixed top-0 z-20 sm:px-10">
        <div className="flex w-screen justify-between">
          <Link to="/">
            <h1 className="font-extrabold h-fit self-end cursor-pointer">
              Where in the world?
            </h1>
          </Link>
          <div className="flex h-fit items-center cursor-pointer">
            <img src={MoonOutline} alt="Dark Mode Icon" className="w-5 mr-3" />
            <span className="font-semibold self-end text-sm">Dark Mode</span>
          </div>
        </div>
      </nav>
      {children}
    </main>
  );
};

AuthLayouts.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayouts;
