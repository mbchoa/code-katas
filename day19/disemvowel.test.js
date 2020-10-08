import disemvowel from './disemvowel';

it('should pass base case', () => {
  expect(disemvowel('This website is for losers LOL!')).toBe(
    'Ths wbst s fr lsrs LL!'
  );
});
