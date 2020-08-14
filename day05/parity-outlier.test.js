import findOutlier from './parity-outlier';

const Test = {
  assertEquals(a, b) {
    expect(a).toEqual(b);
  },
};

test('case #1', () => {
  Test.assertEquals(findOutlier([0, 1, 2]), 1);
});
test('case #2', () => {
  Test.assertEquals(findOutlier([1, 2, 3]), 2);
});
test('case #3', () => {
  Test.assertEquals(findOutlier([2, 6, 8, 10, 3]), 3);
});
test('case #4', () => {
  Test.assertEquals(findOutlier([0, 0, 3, 0, 0]), 3);
});
test('case #5', () => {
  Test.assertEquals(findOutlier([1, 1, 0, 1, 1]), 0);
});
test('case #6', () => {
  Test.assertEquals(
    findOutlier([
      83723367,
      195269671,
      29287425,
      140616431,
      184939777,
      -56573020,
      42629163,
      2245227,
      169104719,
      -123147571,
      56557009,
      65802017,
      196207345,
      -160085191,
      154865839,
      -170655831,
      95344125,
      72270441,
      -184105593,
      -7723539,
      -138685881,
      60455371,
      126550881,
      -92359475,
      -29085967,
      52453555,
      179605879,
    ]),
    -56573020
  );
});
