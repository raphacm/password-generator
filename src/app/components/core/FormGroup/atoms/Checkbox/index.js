import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const Checkbox = ({ options, label }) => {
  return (
    <>
      <h4>{label}</h4>
      {options.map(option => {
        const { id, name, value, checked, onClick } = option;
        return (
          <div key={id} className="checkbox-container">
            <input
              type="checkbox"
              className="checkbox-container__input"
              id={id}
              value={value}
              name={name}
              onClick={onClick}
              defaultChecked={checked}
            />
            <label className="checkbox-container__label" htmlFor={id}>
              {name.toLowerCase()}
            </label>
          </div>
        );
      })}
    </>
  );
};

Checkbox.propTypes = {
  options: PropTypes.array.isRequired,
};

Checkbox.defaultProps = {
  options: [
    {
      id: "checkbox-id",
      name: "checkbox-name",
      checked: false,
      onClick: e => console.log(e.target.value),
    },
  ],
};

export default Checkbox;
