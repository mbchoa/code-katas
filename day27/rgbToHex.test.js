import rgb from './rgbToHex';

describe('rgbToHex', () => {
  it('case #1', () => {
    expect(rgb(0, 0, 0)).toBe('000000');
  });
  it('case #2', () => {
    expect(rgb(0, 0, -20)).toBe('000000');
  });
  it('case #3', () => {
    expect(rgb(300, 255, 255)).toBe('FFFFFF');
  });
  it('case #4', () => {
    expect(rgb(173, 255, 47)).toBe('ADFF2F');
  });
});
