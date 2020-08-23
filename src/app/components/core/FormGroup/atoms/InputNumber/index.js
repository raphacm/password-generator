import React from "react";
import PropTypes from "prop-types";

const InputNumber = ({ id, name, value, step, min, max, onChange }) => {
  return (
    <input
      type="number"
      className="form-group__control"
      id={id}
      name={name}
      value={value}
      step={step}
      min={min}
      max={max}
      onChange={onChange}
    />
  );
};

InputNumber.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  step: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  onChange: PropTypes.func,
};

InputNumber.defaultProps = {
  value: "0",
  step: "1",
  min: "0",
  max: "32",
  onChange: e => console.log(e.target.value),
};

export default InputNumber;
