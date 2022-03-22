/**
 * Напишите функцию multiple(a, b), умножающую число a на число b,
 * не используя оператор "*" или метод Math.imul.
 *
 * Пример:
 * multiple(1, 1) === 1
 * multiple(1, 2) === 2
 * multiple(0, 0) === 0
 *
 * Больше примеров в тестах.
 *
 * @param  {number} a любое целое число
 * @param  {number} b любое целое число
 * @return {number}
 */

export default function multiple(a, b) {
  let result = 0;

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    if (a === 0 || b === 0) {
      return NaN;
    }

    result = Infinity;
  } else {
    for (let i = 0; i < Math.abs(b); ++i) {
      result += Math.abs(a);
    }
  }

  const nonZeroSign = x => (1 / x > 0 ? +1 : -1);

  if (nonZeroSign(a) === -1) {
    result = -result;
  }

  if (nonZeroSign(b) === -1) {
    result = -result;
  }

  return result;
}
