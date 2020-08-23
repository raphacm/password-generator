import React, { useState } from "react";
import { passwordOptions, patterns } from "../../../enums/passwordOptions";
import FormGroup from "../core/FormGroup";
import { reverseSelectedRules } from "../../../utils";
import Button from "../core/Button";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passwordSize, setPasswordSize] = useState("10");
  const [passwordRules, setRules] = useState({
    UPPERCASE: "",
    LOWERCASE: "",
    NUMBERS: "",
    SYMBOLS: "",
  });

  const handleSelectRules = event => {
    const { name } = event.target;
    const rules = {
      ...passwordRules,
      [name]: passwordRules[name] === "" ? patterns[name] : "",
    };

    setRules(rules);
  };

  const handlePasswordSize = event => {
    const { value } = event.target;
    setPasswordSize(value);
  };

  const handleGeneratePassword = event => {
    event.preventDefault();
    const selectedRules = reverseSelectedRules(passwordRules);
    let generatedPassword = "";

    if (passwordSize > 0 && selectedRules.length > 0) {
      for (let idx = 0; idx < passwordSize; idx++) {
        const randomNumber = Math.random() * selectedRules.length;
        generatedPassword = generatedPassword.concat(
          selectedRules.charAt(randomNumber)
        );
      }
      setPassword(generatedPassword);
    }
  };

  return (
    <form className="form__group">
      <FormGroup
        type="readOnly"
        id="passwordField"
        name="passwordField"
        value={password}
        label="Password"
        readOnly
      />

      <FormGroup
        type="number"
        id="sizeField"
        name="sizeField"
        value={passwordSize}
        label="Size"
        step="1"
        max="64"
        onChange={handlePasswordSize}
      />

      <FormGroup
        type="checkbox"
        label="Choose a password weigth"
        options={[
          {
            id: "uppercaseField",
            name: passwordOptions.UPPERCASE,
            checked: false,
            onClick: handleSelectRules,
          },
          {
            id: "lowercaseField",
            name: passwordOptions.LOWERCASE,
            checked: false,
            onClick: handleSelectRules,
          },
          {
            id: "numbersField",
            name: passwordOptions.NUMBERS,
            checked: false,
            onClick: handleSelectRules,
          },
          {
            id: "symbolsField",
            name: passwordOptions.SYMBOLS,
            checked: false,
            onClick: handleSelectRules,
          },
        ]}
      />

      <Button
        type="primary"
        label="Generate"
        onClick={handleGeneratePassword}
      />
    </form>
  );
};

export default PasswordGenerator;
