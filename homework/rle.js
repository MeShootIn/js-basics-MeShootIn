/**
 * Напишите функцию rle(input), реализующую примитивное RLE-сжатие входящей строки input.
 * Подробнее об RLE: https://ru.wikipedia.org/wiki/Кодирование_длин_серий
 *
 * Входящая строка сооттветствует regex паттерну /^[A-Z]+$/
 *
 * Пример:
 * rle('AAAB') === 'A3B'
 * rle('BCCDDDEEEE') === 'BC2D3E4'
 *
 * Больше примеров в тестах.
 *
 * @param  {string} input
 * @return {string}
 */
export default function rle(input) {
  let count = 0;

  let encoded = '';

  for (let i = 0; i < input.length; ++i) {
    if (input.charAt(i) === input.charAt(i + 1)) {
      count += 1;
    } else {
      encoded += input.charAt(i) + ((count > 0) ? count + 1 : '');
      count = 0;
    }
  }

  return encoded;
}
