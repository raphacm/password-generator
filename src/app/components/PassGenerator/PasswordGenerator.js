import React, { useState } from "react";
import { passwordOptions, patterns } from "../../../enums/passwordOptions";
import { reverseSelectedRules } from "../../../utils";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passwordSize, setPasswordSize] = useState(0);
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
      <input id="passwordField" type="text" value={password} readOnly />

      <label htmlFor="sizeField">Tamanho</label>
      <input
        id="sizeField"
        type="number"
        step="1"
        max="64"
        onChange={handlePasswordSize}
      />

      <label htmlFor="uppercaseField">Maiúscula</label>
      <input
        type="checkbox"
        id="uppercaseField"
        className="form__checkbox"
        name={passwordOptions.UPPERCASE}
        defaultChecked={false}
        onClick={handleSelectRules}
      />

      <label htmlFor="lowercaseField">Minuscula</label>
      <input
        type="checkbox"
        id="lowercaseField"
        className="form__checkbox"
        name={passwordOptions.LOWERCASE}
        defaultChecked={false}
        onClick={handleSelectRules}
      />

      <label htmlFor="numberField">Números</label>
      <input
        type="checkbox"
        id="numberField"
        className="form__checkbox"
        name={passwordOptions.NUMBERS}
        defaultChecked={false}
        onClick={handleSelectRules}
      />

      <label htmlFor="symbolsField">Símbolos</label>
      <input
        type="checkbox"
        id="symbolsField"
        className="form__checkbox"
        name={passwordOptions.SYMBOLS}
        defaultChecked={false}
        onClick={handleSelectRules}
      />

      <button onClick={handleGeneratePassword}>Generate</button>
    </form>
  );
};

export default PasswordGenerator;
