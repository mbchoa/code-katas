import getMiddle from './get-middle';

describe('getMiddle', () => {
  it('case #1', () => {
    expect(getMiddle('test')).toBe('es');
  });

  it('case #2', () => {
    expect(getMiddle('testing')).toBe('t');
  });

  it('case #3', () => {
    expect(getMiddle('middle')).toBe('dd');
  });

  it('case #4', () => {
    expect(getMiddle('A')).toBe('A');
  });
});
