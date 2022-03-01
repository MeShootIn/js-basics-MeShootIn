import multiple from '../homework/multiple';

describe('multiple', () => {
  it('multiplies', () => {
    const random = () => Math.floor(Math.random() * 100) * (Math.random() < 0.5 ? -1 : 1);
    const cases = [
      [1, 1],
      [1, 2],
      [0, 0],
      [random(), random()],
      [random(), random()],
      [random(), random()],
      [random(), random()],
      [random(), random()],
      [1, -Infinity],
      [0, Infinity]
    ];

    cases.forEach(([a, b]) => {
      expect(multiple(a, b)).toBe(a * b);
    });
  });
});
