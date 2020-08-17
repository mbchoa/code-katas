function getPermutations(numDigits, possibleDigits) {
  function rec(soFar, remainingDigits) {
    if (remainingDigits === 0) {
      output.push(soFar);
      return;
    }

    for (let i = 0; i < possibleDigits.length; i++) {
      const next = [...soFar, possibleDigits[i]];
      rec(next, remainingDigits - 1);
    }
  }

  const output = [];
  rec([], numDigits);
  return output;
}

export default function possibilities(str) {
  const tokenized = str.split('');
  const numEmpty = tokenized.filter((char) => char === '?').length;
  const permutations = getPermutations(numEmpty, [0, 1]);
  return permutations.map((combo) => {
    let comboIndex = 0;
    return tokenized.reduce(
      (output, char) => `${output}${char === '?' ? combo[comboIndex++] : char}`,
      ''
    );
  });
}
