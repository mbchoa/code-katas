export default function validParentheses(parens) {
  let numIncompleteParens = 0;
  for (let i = 0; i < parens.length; i++) {
    switch (parens[i]) {
      case '(':
        numIncompleteParens++;
        break;
      case ')':
        numIncompleteParens--;
        break;
      default:
        return false;
    }
    if (numIncompleteParens < 0) {
      return false;
    }
  }

  return numIncompleteParens === 0;
}
