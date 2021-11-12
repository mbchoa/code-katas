import humanReadable from './humanReadable';

describe('humanReadable', () => {
  it('case #1', () => {
    expect(humanReadable(0)).toBe('00:00:00');
  });
  it('case #2', () => {
    expect(humanReadable(59)).toBe('00:00:59');
  });
  it('case #3', () => {
    expect(humanReadable(60)).toBe('00:01:00');
  });
  it('case #4', () => {
    expect(humanReadable(90)).toBe('00:01:30');
  });
  it('case #5', () => {
    expect(humanReadable(3599)).toBe('00:59:59');
  });
  it('case #6', () => {
    expect(humanReadable(3600)).toBe('01:00:00');
  });
  it('case #7', () => {
    expect(humanReadable(45296)).toBe('12:34:56');
  });
  it('case #8', () => {
    expect(humanReadable(86399)).toBe('23:59:59');
  });
  it('case #9', () => {
    expect(humanReadable(86400)).toBe('24:00:00');
  });
  it('case #10', () => {
    expect(humanReadable(359999)).toBe('99:59:59');
  });
});
