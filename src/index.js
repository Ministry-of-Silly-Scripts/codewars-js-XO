const XO = (str) => {
  let total = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i].toLowerCase() === 'x') total += 1;
    if (str[i].toLowerCase() === 'o') total -= 1;
  }

  return total === 0;
};

module.exports = {
  XO,
};
