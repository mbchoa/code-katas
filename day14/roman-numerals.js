function fill(el, size) {
  return [...Array(size)].map(() => el);
}

// Iteration 1:
// 1944 => M CM LX IV
// 4491 => IV LX CM M
export default function solution(number) {
  const tokenized = number.toString().split('').reverse();
  return tokenized
    .map((digit, index) => {
      if (index === 3) {
        return fill('M', +digit).join('');
      }

      switch (digit) {
        case '9':
          if (index === 0) return 'IX';
          if (index === 1) return 'XC';
          if (index === 2) return 'CM';
          break;

        case '8':
        case '7':
        case '6':
          if (index === 0) return `V${fill('I', digit - 5).join('')}`;
          if (index === 1) return `L${fill('X', digit - 5).join('')}`;
          if (index === 2) return `D${fill('C', digit - 5).join('')}`;
          break;

        case '5':
          if (index === 0) return 'V';
          if (index === 1) return 'L';
          if (index === 2) return 'D';
          break;

        case '4':
          if (index === 0) return 'IV';
          if (index === 1) return 'XL';
          if (index === 2) return 'CD';
          break;

        case '3':
        case '2':
        case '1':
          if (index === 0) return fill('I', +digit).join('');
          if (index === 1) return fill('X', +digit).join('');
          if (index === 2) return fill('C', +digit).join('');
          break;
      }
    })
    .reverse()
    .join('');
}

// Iteration 2
export function solution2(number) {
  const mapping = [
    { char: 'M', value: 1000 },
    { char: 'CM', value: 900 },
    { char: 'D', value: 500 },
    { char: 'CD', value: 400 },
    { char: 'C', value: 100 },
    { char: 'XC', value: 90 },
    { char: 'L', value: 50 },
    { char: 'XL', value: 40 },
    { char: 'X', value: 10 },
    { char: 'IX', value: 9 },
    { char: 'V', value: 5 },
    { char: 'IV', value: 4 },
    { char: 'I', value: 1 },
  ];
  return mapping.reduce((output, { char, value }) => {
    while (number >= value) {
      number -= value;
      output += char;
    }
    return output;
  }, '');
}
