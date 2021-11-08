import longestConsec from './longestConsec';

describe('longestConsec', () => {
  it('case #1', () => {
    expect(
      longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2)
    ).toBe('abigailtheta');
  });

  it('case #2', () => {
    expect(
      longestConsec(
        [
          'ejjjjmmtthh',
          'zxxuueeg',
          'aanlljrrrxx',
          'dqqqaaabbb',
          'oocccffuucccjjjkkkjyyyeehh',
        ],
        1
      )
    ).toBe('oocccffuucccjjjkkkjyyyeehh');
  });

  it('case #3', () => {
    expect(longestConsec([], 3)).toBe('');
  });

  it('case #4', () => {
    expect(
      longestConsec(
        [
          'itvayloxrp',
          'wkppqsztdkmvcuwvereiupccauycnjutlv',
          'vweqilsfytihvrzlaodfixoyxvyuyvgpck',
        ],
        2
      )
    ).toBe(
      'wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck'
    );
  });

  it('case #5', () => {
    expect(
      longestConsec(['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'], 2)
    ).toBe('wlwsasphmxxowiaxujylentrklctozmymu');
  });

  it('case #6', () => {
    expect(
      longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], -2)
    ).toBe('');
  });

  it('case #7', () => {
    expect(
      longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3)
    ).toBe('ixoyx3452zzzzzzzzzzzz');
  });

  it('case #8', () => {
    expect(
      longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 15)
    ).toBe('');
  });

  it('case #9', () => {
    expect(
      longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 0)
    ).toBe('');
  });
});
