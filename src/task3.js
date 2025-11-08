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
    if(!currency){
        throw new Error("Валюта не задана");
        
    }
    if((currency !== "RUB") && (currency !== "USD")){
        throw new Error("Поддерживаемые валюты: RUB, USD");
    }
    const result = {}
    let kol = 0

    if (currency === 'RUB') {
        for (const i of data) {
            if (i.includes('₽')) {
                kol++
            }
        }
        result[currency] = kol
    } else {
        for (const i of data) {
            if (i.includes('$')) {
                kol++
            }
        }
        result[currency] = kol
    }

    return result
}
