import escape from './car-escape';

const Test = {
  assertDeepEquals(a, b) {
    expect(a).toEqual(b);
  },
};

test('case 1', () => {
  let carpark = [
    [1, 0, 0, 0, 2],
    [0, 0, 0, 0, 0],
  ];
  let result = ['L4', 'D1', 'R4'];

  Test.assertDeepEquals(
    escape(carpark),
    result,
    "Expected '" + result.toString() + "'"
  );
});

test('case 2', () => {
  const carpark = [
    [2, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0],
  ];
  const result = ['R3', 'D2', 'R1'];

  Test.assertDeepEquals(
    escape(carpark),
    result,
    "Expected '" + result.toString() + "'"
  );
});

test('case 3', () => {
  const carpark = [
    [0, 2, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0],
  ];
  const result = ['R3', 'D3'];

  Test.assertDeepEquals(
    escape(carpark),
    result,
    "Expected '" + result.toString() + "'"
  );
});

test('case 4', () => {
  const carpark = [
    [1, 0, 0, 0, 2],
    [0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];
  const result = ['L4', 'D1', 'R4', 'D1', 'L4', 'D1', 'R4'];

  Test.assertDeepEquals(
    escape(carpark),
    result,
    "Expected '" + result.toString() + "'"
  );
});

test('case 5', () => {
  const carpark = [[0, 0, 0, 0, 2]];
  const result = [];

  Test.assertDeepEquals(
    escape(carpark),
    result,
    "Expected '" + result.toString() + "'"
  );
});
