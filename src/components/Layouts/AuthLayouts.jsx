import PropTypes from "prop-types";
import Navbar from "../Fragments/Navbar";

const AuthLayouts = (props) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

AuthLayouts.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayouts;
