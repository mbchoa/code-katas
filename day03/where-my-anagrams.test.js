import anagrams from './where-my-anagrams';

describe('should pass basic tests', () => {
  test('should return ["aabb", "bbaa"]', () => {
    expect(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])).toEqual([
      'aabb',
      'bbaa',
    ]);
  });

  test('should return ["carer", "racer"]', () => {
    expect(
      anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])
    ).toEqual(['carer', 'racer']);
  });

  test('should return []', () => {
    expect(anagrams('laser', ['lazing', 'lazy', 'lacer'])).toEqual([]);
  });
});
