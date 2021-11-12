export default function humanReadable(time) {
  const hours = `${Math.floor(time / 3600)}`.padStart(2, 0);
  const minutes = `${Math.floor((time - hours * 3600) / 60)}`.padStart(2, 0);
  const seconds = `${time - hours * 3600 - minutes * 60}`.padStart(2, 0);
  return `${hours}:${minutes}:${seconds}`;
}
