import formatList from './formatList';

describe('formatList', () => {
  it('case #', () => {
    expect(
      formatList([
        { name: 'Bart' },
        { name: 'Lisa' },
        { name: 'Maggie' },
        { name: 'Homer' },
        { name: 'Marge' },
      ])
    ).toEqual('Bart, Lisa, Maggie, Homer & Marge');
  });

  it('case #', () => {
    expect(
      formatList([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }])
    ).toEqual('Bart, Lisa & Maggie');
  });

  it('case #', () => {
    expect(formatList([{ name: 'Bart' }, { name: 'Lisa' }])).toEqual(
      'Bart & Lisa'
    );
  });

  it('case #', () => {
    expect(formatList([{ name: 'Bart' }])).toEqual('Bart');
  });

  it('case #', () => {
    expect(formatList([])).toEqual('');
  });
});
