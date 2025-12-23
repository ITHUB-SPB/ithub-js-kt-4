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
export function countPrices(prices, currency) {
    // Проверяет что валюта задана
    if (currency === undefined) {
      throw new Error("Валюта не задана");
    }
    
    // Проверяет поддержку валюты RUB/USD
    if (!["RUB", "USD"].includes(currency)) {
      throw new Error("Поддерживаемые валюты: RUB, USD");
    }
  
    
    const count = prices.reduce((acc, price) => {// Подсчитывает строки с символами валюты ₽ или $
      const normalizedPrice = price.toUpperCase(); // Приводит к верхнему регистру для надежности
      const regex = currency === "RUB" ? /₽/ : /\$/; // Если символ найден - увеличиваем счетчик
      if (regex.test(normalizedPrice)) {
        return acc + 1;
      }
      return acc; // счетчик не меняется
    }, 0); // начальное значение 0
    
    // Возвращает объект
    return { [currency]: count };
  }
