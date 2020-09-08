import expandedForm from './expanded-form';

describe('expanded-form', () => {
  test('case #1', () => {
    expect(expandedForm(12)).toBe('10 + 2');
  });

  test('case #2', () => {
    expect(expandedForm(42)).toBe('40 + 2');
  });

  test('case #3', () => {
    expect(expandedForm(70304)).toBe('70000 + 300 + 4');
  });
});
