import React from "react";
import InputText from "./atoms/InputText";
import InputNumber from "./atoms/InputNumber";
import Checkbox from "./atoms/Checkbox";
import FormLabel from "./atoms/FormLabel";
import "./index.scss";

const FormGroup = ({
  type,
  id,
  name,
  placeholder,
  label,
  step,
  min,
  max,
  value,
  onChange,
  options,
}) => {
  const renderInput = () => {
    switch (type) {
      case "readOnly":
        return (
          <InputText
            readOnly
            id={id}
            name={name}
            placeholder={placeholder || label}
            value={value}
            onChange={onChange}
          />
        );
      case "number":
        return (
          <InputNumber
            id={id}
            name={name}
            placeholder={placeholder || label}
            onChange={onChange}
            step={step}
            min={min}
            value={value}
            max={max}
          />
        );
      case "checkbox":
        return <Checkbox label="Choose password weight" options={options} />;
      default:
        return (
          <InputText
            id={id}
            name={name}
            placeholder={placeholder || label}
            value={value}
            onChange={onChange}
          />
        );
    }
  };

  return (
    <div className="form-group">
      {renderInput()}
      <FormLabel htmlFor={id} label={label} />
    </div>
  );
};

export default FormGroup;
