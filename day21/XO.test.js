import XO from './XO';

it('case #1', () => {
  expect(XO('xo')).toBe(true);
});

it('case #2', () => {
  expect(XO('xxOo')).toBe(true);
});

it('case #3', () => {
  expect(XO('xxxm')).toBe(false);
});

it('case #4', () => {
  expect(XO('Oo')).toBe(false);
});

it('case #5', () => {
  expect(XO('ooom')).toBe(false);
});

it('case #6', () => {
  expect(XO('xxxxxoooxooo')).toBe(true);
});
