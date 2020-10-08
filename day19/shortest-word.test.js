import findShort from './shortest-word';

describe('should pass base cases', () => {
  it('case #1', () => {
    expect(
      findShort('bitcoin take over the world maybe who knows perhaps')
    ).toBe(3);
  });

  it('case #2', () => {
    expect(
      findShort(
        'turns out random test cases are easier than writing out basic ones'
      )
    ).toBe(3);
  });

  it('case #3', () => {
    expect(
      findShort(
        'Lisk Dash ProofOfStake DarkCoin ProofOfStake MadeSafeCoin Classic ProofOfStake MadeSafeCoin Mine Monero Factom Dash'
      )
    ).toBe(4);
  });
});
