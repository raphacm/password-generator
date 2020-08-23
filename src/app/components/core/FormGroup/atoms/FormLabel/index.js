import React from "react";
import PropTypes from "prop-types";

const FormLabel = ({ htmlFor, label }) => {
  return (
    <label className="form-group__label" htmlFor={htmlFor}>
      {label}
    </label>
  );
};

FormLabel.propTypes = {
  htmlFor: PropTypes.string,
  label: PropTypes.string.isRequired,
};

FormLabel.defaultProps = {
  htmlFor: "",
};

export default FormLabel;
