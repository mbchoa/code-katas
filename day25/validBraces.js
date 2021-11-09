export default function validBraces(braces) {
  const bracePair = { '(': ')', '{': '}', '[': ']' };
  const stack = [];
  for (const brace of braces) {
    if (['(', '[', '{'].includes(brace)) {
      stack.push(brace);
    } else {
      const openBrace = stack.pop();
      if (bracePair[openBrace] !== brace) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
