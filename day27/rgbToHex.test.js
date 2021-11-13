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
  it('case #5', () => {
    expect(rgb(212, 107, 1)).toBe('D46B01');
  });
  it('case #6', () => {
    expect(rgb(176, 275, 148)).toBe('B0FF94');
  });
  it('case #7', () => {
    expect(rgb(255, 16, 118)).toBe('FF1076');
  });
});
