/**
 * Напишите функцию getMinMax(input), принимающую строку input,
 * и ищущую в ней максимальное и минимальное числа.
 *
 * Числа в строке выделяются пробелами или знаками препинания.
 *
 * Пример:
 * getMinMax('1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028');
 * // { min: -1028, max: 15 }
 *
 * getMinMax('"To Infinity and beyond", - repeated Buzz Lightyear 4 times in a row')
 * { max: Infinity, min: 4 }
 *
 * Больше примеров в тестах.
 *
 * @param  {string} input входная строка
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 */
export default function getMinMax(input) {
  const parsedInput = input
    .split(' ')
    .map(currentValue => Number.parseFloat(currentValue))
    .filter(number => !Number.isNaN(number));

  const chooser = (fn, a, b) => {
    if (typeof a === 'undefined') {
      return b;
    }

    if (typeof b === 'undefined') {
      return a;
    }

    return fn(a, b);
  };
  const getMin = chooser.bind(null, Math.min);
  const getMax = chooser.bind(null, Math.max);

  return {
    min: parsedInput.reduce((min, elem) => getMin(min, elem), undefined),
    max: parsedInput.reduce((max, elem) => getMax(max, elem), undefined)
  };
}
