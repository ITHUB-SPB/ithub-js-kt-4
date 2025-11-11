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
    const parts = fullName.split(' ');
    
    const result = {
        firstName: parts[0]
    };

    if (parts[1]) {
        result.lastName = parts[1];
    }
    
    return result;
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
export function toSplittedNames(namesArray) {
    return namesArray.map(splitName);
}
