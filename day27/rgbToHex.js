const decToHexMap = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: 'A',
  11: 'B',
  12: 'C',
  13: 'D',
  14: 'E',
  15: 'F',
};

function toDecimal(value, inputBase) {
  const valueInLSDOrder = `${value}`.split('').reverse();
  return valueInLSDOrder.reduce(
    (total, digitStr, index) =>
      total + parseInt(digitStr, 10) * inputBase ** index,
    0
  );
}

function toHex(value, base = 10) {
  if (value <= 0) {
    return '00';
  }

  const valueAsDecimal = base === 10 ? value : toDecimal(value, base);

  let modifiedValue = valueAsDecimal;
  const hexDigitsLSDOrder = [];
  while (modifiedValue > 15) {
    const quotientInteger = parseInt(modifiedValue / 16, 10);
    const remainder = decToHexMap[modifiedValue - quotientInteger * 16];
    hexDigitsLSDOrder.push(remainder);
    modifiedValue = quotientInteger;
  }
  hexDigitsLSDOrder.push(decToHexMap[modifiedValue]);
  return hexDigitsLSDOrder.reverse().join('').padStart(2, '0');
}

function clamp(value, min, max) {
  return value < min ? min : value > max ? max : value;
}

export default function rgbToHex(r, g, b) {
  return `${toHex(clamp(r, 0, 255))}${toHex(clamp(g, 0, 255))}${toHex(
    clamp(b, 0, 255)
  )}`;
}
