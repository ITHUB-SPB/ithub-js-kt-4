/**
 * @param {Object[]} objects - Исходный массив объектов
 *
 * @returns {Any[][]} Массив, содержащий только значения свойств непустых объектов
 *
 * @description Функция получает на вход массив объектов и, не модифицируя
 * его, возвращает новый массив, содержащий только значения свойств непустых объектов
 *
 * @example
 * const data = [ {id: 1, name: 'apple'}, {id: 2, name: 'qiwi'}, {} ]
 * extractValues(data) // [ [ 1, "apple" ], [ 2, "qiwi" ] ]
 *
 */
export function extractValues(objects) {
  const result = objects
      .filter((obj) => Object.keys(obj).length > 0) // проверка на пустой массив
      .map((obj) => Object.values(obj)) // создаем новый массив и вкладываем туда значения 
  return result
}