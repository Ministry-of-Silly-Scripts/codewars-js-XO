const XO = (str) => {
  let total = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === 'x') total += 1;
    if (str[i] === 'o') total -= 1;
  }

  if (total === 0) return true;

  return false;
};

module.exports = {
  XO,
};
