import Vector from './vector';

describe('vector', () => {
  const a = new Vector([1, 2]);
  const b = new Vector([3, 4]);

  test('#add', () => {
    expect(a.add(b)).toEqual(new Vector([4, 6]));
  });

  test('#subtract', () => {
    expect(a.subtract(b)).toEqual(new Vector([-2, -2]));
  });

  test('#dot', () => {
    expect(a.dot(b)).toBe(11);
  });

  test('#norm', () => {
    expect(a.norm()).toBe(2.23606797749979);
  });

  test('#toString', () => {
    expect(a.toString()).toBe('(1,2)');
  });

  test('#equals', () => {
    expect(a.equals(b)).toBe(false);
  });

  test('incompatible vectors', () => {
    expect(() => {
      a.add(new Vector([1, 2, 3]));
    }).toThrow();
  });
});
