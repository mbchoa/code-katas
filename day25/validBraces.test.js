import validBraces from './validBraces';

describe('validBraces', () => {
  it('case #1', () => {
    expect(validBraces('()')).toBe(true);
  });

  it('case #2', () => {
    expect(validBraces('[(])')).toBe(false);
  });

  it('case #3', () => {
    expect(validBraces('(){}[]')).toBe(true);
  });

  it('case #4', () => {
    expect(validBraces('([{}])')).toBe(true);
  });

  it('case #5', () => {
    expect(validBraces('(}')).toBe(false);
  });

  it('case #6', () => {
    expect(validBraces('[(])')).toBe(false);
  });

  it('case #7', () => {
    expect(validBraces('({})[({})]')).toBe(true);
  });

  it('case #8', () => {
    expect(validBraces('(})')).toBe(false);
  });

  it('case #9', () => {
    expect(validBraces('(({{[[]]}}))')).toBe(true);
  });

  it('case #10', () => {
    expect(validBraces('{}({})[]')).toBe(true);
  });

  it('case #11', () => {
    expect(validBraces(')(}{][')).toBe(false);
  });

  it('case #12', () => {
    expect(validBraces('())({}}{()][][')).toBe(false);
  });

  it('case #13', () => {
    expect(validBraces('(((({{')).toBe(false);
  });
});
