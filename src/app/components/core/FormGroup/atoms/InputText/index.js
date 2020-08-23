import React from "react";
import PropTypes from "prop-types";

const InputText = ({ id, name, placeholder, value, readOnly, onChange }) => {
  return (
    <input
      type="text"
      className={`form-group__control ${
        readOnly ? "form-group__control--disabled" : ""
      }`}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      readOnly={readOnly}
      onChange={onChange}
    />
  );
};

InputText.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
};

InputText.defaultProps = {
  value: "",
  readOnly: false,
  onChange: e => console.log(e.target.value),
};

export default InputText;
