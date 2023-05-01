import PropTypes from "prop-types";
import DropDownIcon from "../../../assets/chevron-down-outline.svg";
const SelectBox = ({ handleToggle, selectedRegion }) => {
  return (
    <div
      onClick={handleToggle}
      className="w-[60%] h-16 rounded-lg drop-shadow-sm self-start ml-[18px] bg-white flex justify-between items-center px-4 mb-2 cursor-pointer"
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
  selectedRegion: PropTypes.string,
};

export default SelectBox;
