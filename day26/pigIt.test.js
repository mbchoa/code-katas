import pigIt from './pigIt';

describe('pigIt', () => {
  it('case #', () => {
    expect(pigIt('Pig latin is cool')).toEqual('igPay atinlay siay oolcay');
  });

  it('case #', () => {
    expect(pigIt('This is my string')).toEqual('hisTay siay ymay tringsay');
  });

  it('case #3', () => {
    expect(pigIt('O tempora o mores !')).toEqual('Oay emporatay oay oresmay !');
  });
});
