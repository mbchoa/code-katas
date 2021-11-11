import buildTower from './buildTower';

describe('buildTower', () => {
  it('case #1', () => {
    expect(buildTower(1)).toStrictEqual(['*']);
  });

  it('case #2', () => {
    expect(buildTower(2)).toStrictEqual([' * ', '***']);
  });

  it('case #3', () => {
    expect(buildTower(3)).toStrictEqual(['  *  ', ' *** ', '*****']);
  });
});
