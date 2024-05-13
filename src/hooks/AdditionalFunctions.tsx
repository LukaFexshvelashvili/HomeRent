export function hasNumbersAndLetters(str: string) {
  var digitRegex = /\d/;
  var letterRegex = /[a-zA-Z]/;

  return digitRegex.test(str) && letterRegex.test(str);
}
export function hasUppercase(str: string) {
  var uppercaseRegex = /[A-Z]/;

  return uppercaseRegex.test(str);
}
