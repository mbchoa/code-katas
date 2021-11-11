export default function formatList(names) {
  if (names.length === 0) {
    return '';
  }

  if (names.length === 1) {
    return names[0].name;
  }

  if (names.length === 2) {
    return `${names[0].name} & ${names[1].name}`;
  }

  return `${names[0].name}, ${formatList(names.slice(1))}`;
}
