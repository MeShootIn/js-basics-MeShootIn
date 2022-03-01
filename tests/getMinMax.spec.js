import getMinMax from '../homework/getMinMax';

describe('getMinMax', () => {
  it('Extracts values correctly', () => {
    expect(getMinMax('1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028')).toEqual({ max: 15, min: -1028 });
    expect(getMinMax('100 и 500 -3; 178 или неточное число 1.3232')).toEqual({ max: 500, min: -3 });
    expect(getMinMax('"To Infinity and beyond", - repeated Buzz Lightyear 4 times in a row')).toEqual({
      max: Infinity,
      min: 4
    });
    expect(getMinMax('"To -Infinity and beyond", - repeated Buzz Lightyear 4 times in a row')).toEqual({
      max: 4,
      min: -Infinity
    });
    expect(getMinMax(
      `
      У нас было 2 мешка травы, 75 таблеток мескалина, 5 марок мощнейшей кислоты,
      полсолонки кокаина и гора возбудителей, успокоительных и всего такого, всех цветов,
      а ещё 1 литр текилы, 1 литр рома, ящик пива, 0.5 литра эфира и 24 амила.
    `
    )).toEqual({ max: 75, min: 0.5 });
    expect(getMinMax('Нет ничего проще 0 и 1')).toEqual({ max: 1, min: 0 });
    expect(getMinMax('nothing to say')).toEqual({ max: undefined, min: undefined });
  });
});
