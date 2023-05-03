import ArrowBack from "../../../assets/arrow-back-outline.svg";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link to="/">
      <div className="flex items-center justify-center drop-shadow-xl fixed top-[105px] left-[18px] bg-white px-8 py-3 rounded-sm">
        <img src={ArrowBack} alt="Arrow Back Icon" className="w-5 mr-3" />
        <span>Back</span>
      </div>
    </Link>
  );
};

export default Button;
