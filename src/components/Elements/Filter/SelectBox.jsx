import PropTypes from "prop-types";
import DropDownIcon from "../../../assets/chevron-down-outline.svg";
const SelectBox = ({ handleToggle, selectedRegion }) => {
  return (
    <div
      onClick={handleToggle}
      className="w-[60%] h-16 rounded-lg drop-shadow-sm self-start ml-[18px] bg-white flex justify-between items-center px-4 mb-2 cursor-pointer fixed top-[210px] z-20 sm:w-[15%] sm:top-[105px] sm:self-end sm:mr-5"
    >
      <span className="h-fit font-semibold text-sm">
        {selectedRegion ? selectedRegion : "Filter by Region"}
      </span>
      <img src={DropDownIcon} className="h-fit w-5" />
    </div>
  );
};

SelectBox.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  selectedRegion: PropTypes.string.isRequired,
};

export default SelectBox;
