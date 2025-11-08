/**
 * @param {String[]} data - Массив строк
 * @param {"RUB" | "USD"} currency - Валюта

 * @returns {{"RUB": number} | {"USD": number}}
 * 
 * @throws Ошибка, если валюта не задана или задана некорректно
 * 
 * @description Функция принимает на вход массив строк, потенциально
 * относящихся к цене или стоимости, а также валюту (RUB или USD), и
 * возвращает количество объект с валютой и количеством строк, которые 
 * содержат символы "$" или "₽" (согласно выбранной валюте) с численным 
 * значением перед ним.
 * 
 * @example
 * countPrices([
 *   'Цена товара - 1200$',
 *   'Цена не определена',
 *   '9999 ₽',
 *   '150$',
 * ], 'USD') // { USD: 2 }
 *  
 */
export function countPrices(data, currency) {
    let result = {}

    if (currency === undefined || currency === null) {
        throw new Error('Валюта не задана')
    }
    if (currency !== 'USD' && currency !== 'RUB') {
        throw new Error('Поддерживаемые валюты: RUB, USD')
    }
    const Symbol = currency === 'USD' ? '$' : '₽'
    const priceRegex = new RegExp(`\\d+(?:\\.\\d+)?\\s*\\${Symbol}`)
    const count = data.filter((a) => {return priceRegex.test(a) }).length

    result[currency] = count
    return result
}
