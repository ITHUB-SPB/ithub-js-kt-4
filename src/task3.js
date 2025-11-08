/**
 * @param {String} fullName - Имя
 * @returns {{firstName: String, lastName?: String}}
 *
 * @description Функция принимает на вход полное
 * имя и возвращает объект по образцу
 *
 * @example
 * splitName("John Al") // { firstName: "John", lastName: "Al" }
 * splitName("Oliver") // { firstName: "Oliver" }
 */
export function splitName(fullName) {
    return
}

/**
 * @param {String[]} namesArray - Массив имён
 * @returns {{firstName: String, lastName?: String}[]}
 *
 * @description Функция принимает на вход массив имен и возвращает новый
 * массив, полученный их трансформацией функцией `splitName`
 *
 * @example
 * toSplittedNames(["John Al", "Oliver"]) // [{ firstName: "John", lastName: "Al" }, { firstName: "Oliver" }]
 */
export function splitName(fullName) {
    // Разбиваем строку по пробелам и фильтруем пустые строки
    const names = fullName.trim().split(/\s+/).filter(name => name.length > 0);
    
    // Если есть только одно слово - возвращаем только firstName
    if (names.length === 1) {
        return { firstName: names[0] };
    }
    
    // Если два и более слов - берем первое как firstName, остальные объединяем в lastName
    return {
        firstName: names[0],
        lastName: names.slice(1).join(' ')
    };
}
export function toSplittedNames(namesArray) {
    return namesArray.map(splitName);
}
