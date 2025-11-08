/**
 * @param {Object<string, number>} prices - Исходный объект
 *
 * @returns {number} Сумма значений объекта
 *
 * @description Функция  принимает на вход объект с ценами
 * и возвращает сумму его значений, не модифицируя его
 *
 * @example
 * const pricesObject = { price1: 100, price2: 150 }
 * getSumOfValues(pricesObject)  // 250
 */
export function getSumOfValues(prices) {
    const Valuest = Object.values(prices)
    let result = Valuest.reduce((sum, value) => sum + value, 0)
    return result
}
