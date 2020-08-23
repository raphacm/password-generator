import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const Button = ({ type, label, onClick, disabled }) => {
  const buttonClass = {
    btn: "btn",
    "btn--primary": type === "primary" ? "btn--primary" : "",
    "btn--disabled": disabled ? "btn--disabled" : "",
  };

  console.log(Object.values(buttonClass).join(" "));

  return (
    <button
      type="button"
      className={Object.values(buttonClass).join(" ")}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  type: "",
};

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
