import DNAStrand from './dna-strand';

test('case #', () => {
  expect(DNAStrand('AAAA')).toBe('TTTT');
});

test('case #', () => {
  expect(DNAStrand('ATTGC')).toBe('TAACG');
});

test('case #', () => {
  expect(DNAStrand('GTAT')).toBe('CATA');
});
