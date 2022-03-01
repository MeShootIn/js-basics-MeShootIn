import limitCalls from '../homework/limitCalls';

describe('limitCalls', () => {
  it('limits calls', () => {
    const makeIncrement = () => {
      let count = 0;

      return () => {
        count += 1;
        return count;
      };
    };

    const limitedIncrementA = limitCalls(makeIncrement(), 3);

    expect(limitedIncrementA()).toBe(1);
    expect(limitedIncrementA()).toBe(2);
    expect(limitedIncrementA()).toBe(3);
    expect(limitedIncrementA()).toBe(undefined);
    expect(limitedIncrementA()).toBe(undefined);

    const limitedIncrementB = limitCalls(makeIncrement(), 1);

    expect(limitedIncrementB()).toBe(1);
    expect(limitedIncrementB()).toBe(undefined);
    expect(limitedIncrementB()).toBe(undefined);
  });
});
