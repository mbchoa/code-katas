export default function DNAStrand(dna) {
  const dnaPairMap = { A: 'T', C: 'G', G: 'C', T: 'A' };
  return dna
    .split('')
    .map((base) => dnaPairMap[base])
    .join('');
}
