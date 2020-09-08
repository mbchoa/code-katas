export default function wave(str) {
  return str
    .split('')
    .map((char, index, self) =>
      char === ' '
        ? ''
        : `${self.slice(0, index).join('')}${char.toUpperCase()}${self
            .slice(index + 1)
            .join('')}`
    )
    .filter((word) => word.length > 0);
}
