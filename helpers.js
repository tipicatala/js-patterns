export function isValidEmail(email) {
  const tester =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

  return tester.test(email);
}

export function isAllLetters(char) {
  if (typeof char !== 'string') {
    return false;
  }

  return /^[a-zA-Z]+$/.test(char);
}
