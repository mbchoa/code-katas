import solution, { solution2 } from './roman-numerals';

const Test = {
  assertEquals(a, b) {
    expect(a).toBe(b);
  },
};

describe('solution', () => {
  it('should handle small numbers', () => {
    Test.assertEquals(solution(1), 'I', '1 should, "I"');
    Test.assertEquals(solution(2), 'II', '2 should, "II"');
    Test.assertEquals(solution(3), 'III', '3 should, "III"');
    Test.assertEquals(solution(4), 'IV', '4 should, "IV"');
    Test.assertEquals(solution(5), 'V', '5 should, "V"');
    Test.assertEquals(solution(9), 'IX', '9 should, "IX"');
    Test.assertEquals(solution(10), 'X', '10 should, "X"');
    Test.assertEquals(solution(11), 'XI');
    Test.assertEquals(solution(19), 'XIX');
    Test.assertEquals(solution(22), 'XXII');
    Test.assertEquals(solution(15), 'XV');
  });

  it('should handle large numbers', () => {
    Test.assertEquals(solution(1000), 'M', '1000 should, "M"');
    Test.assertEquals(solution(1001), 'MI', '1001 should, "MI"');
    Test.assertEquals(solution(1990), 'MCMXC', '1990 should, "MCMXC"');
    Test.assertEquals(solution(2007), 'MMVII', '2007 should, "MMVII"');
    Test.assertEquals(solution(2008), 'MMVIII', '2008 should, "MMVIII"');
  });
});

describe('solution2', () => {
  it('should handle small numbers', () => {
    Test.assertEquals(solution2(1), 'I', '1 should, "I"');
    Test.assertEquals(solution2(2), 'II', '2 should, "II"');
    Test.assertEquals(solution2(3), 'III', '3 should, "III"');
    Test.assertEquals(solution2(4), 'IV', '4 should, "IV"');
    Test.assertEquals(solution2(5), 'V', '5 should, "V"');
    Test.assertEquals(solution2(9), 'IX', '9 should, "IX"');
    Test.assertEquals(solution2(10), 'X', '10 should, "X"');
    Test.assertEquals(solution2(11), 'XI');
    Test.assertEquals(solution2(19), 'XIX');
    Test.assertEquals(solution2(22), 'XXII');
    Test.assertEquals(solution2(15), 'XV');
  });

  it('should handle large numbers', () => {
    Test.assertEquals(solution2(1000), 'M', '1000 should, "M"');
    Test.assertEquals(solution2(1001), 'MI', '1001 should, "MI"');
    Test.assertEquals(solution2(1990), 'MCMXC', '1990 should, "MCMXC"');
    Test.assertEquals(solution2(2007), 'MMVII', '2007 should, "MMVII"');
    Test.assertEquals(solution2(2008), 'MMVIII', '2008 should, "MMVIII"');
  });
});
