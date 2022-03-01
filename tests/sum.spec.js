import sum from '../homework/sum';

describe('sum', () => {
  it('sums', () => {
    expect(sum()).toBe(0);
    expect(sum(1)(2)()).toBe(3);
    expect(sum(10)(20)()).toBe(30);
    expect(sum(1)(1)(1)(1)(1)()).toBe(5);
    expect(sum(15)(0)(23)()).toBe(38);
    expect(sum(15)(-5)(20)()).toBe(30);
  });
});
