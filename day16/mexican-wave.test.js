import wave from './mexican-wave';

describe('mexican-wave', () => {
  test('case #1', () => {
    const result = ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO'];
    expect(wave('hello')).toEqual(result);
  });
  test('case #1', () => {
    const result = [
      'Codewars',
      'cOdewars',
      'coDewars',
      'codEwars',
      'codeWars',
      'codewArs',
      'codewaRs',
      'codewarS',
    ];
    expect(wave('codewars')).toEqual(result);
  });
  test('case #2', () => {
    const result = [];
    expect(wave('')).toEqual(result);
  });
  test('case #3', () => {
    const result = [
      'Two words',
      'tWo words',
      'twO words',
      'two Words',
      'two wOrds',
      'two woRds',
      'two worDs',
      'two wordS',
    ];
    expect(wave('two words')).toEqual(result);
  });
  test('case #4', () => {
    const result = [' Gap ', ' gAp ', ' gaP '];
    expect(wave(' gap ')).toEqual(result);
  });
});
