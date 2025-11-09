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
    const names = fullName.trim().split(' ').filter(Boolean);
    
    if (names.length === 1) {
        return { firstName: names[0] };
    }
    
    return {
        firstName: names[0],
        lastName: names.slice(1).join(' ')
    };
} 
