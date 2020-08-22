const reverseRule = rule => {
  return rule.split("").reverse().join("");
};

export const reverseSelectedRules = passwordRules => {
  return Object.values(passwordRules)
    .map(rule => reverseRule(rule))
    .join("");
};
