import isIsogram from './isograms';

describe('isograms', () => {
  it('case #1', () => {
    expect(isIsogram('Dermatoglyphics')).toBe(true);
  });
  it('case #2', () => {
    expect(isIsogram('isogram')).toBe(true);
  });
  it('case #3', () => {
    expect(isIsogram('aba')).toBe(false);
  });
  it('case #4', () => {
    expect(isIsogram('moOse')).toBe(false);
  });
  it('case #5', () => {
    expect(isIsogram('isIsogram')).toBe(false);
  });
  it('case #6', () => {
    expect(isIsogram('')).toBe(true);
  });
});
