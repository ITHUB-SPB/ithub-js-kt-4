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
    const filtered = objects.filter(
        (object) => Object.keys(object).length !== 0,
    )
    const result = filtered.map((item) => Object.values(item))

    return result
}
