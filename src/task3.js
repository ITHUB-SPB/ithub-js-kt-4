/**
 * @param {Object[]} args
 * @returns {Object}
 *
 * @description Функция принимает на вход неопределенное
 * количество аргументов, каждый из которых является объектом
 * и возвращает единый объект по образцу
 *
 * @example
 * const firstObject = { id: 1 }
 * const secondObject = { status: 'draft', created: "2025-05-05" }
 * joinObjects(firstObject, secondObject) // { id: 1, status: "draft", created: "2025-05-05" }
 */
export function joinObjects(...args) {
    if (args.length === 0) {
        throw new Error('Отсутствуют объекты для слияния')
    }
    // Создаем пустой объект для результата
    const result = {}

    // Проходим по всем переданным объектам
    for (const obj of args) {
        // Для каждого объекта получаем все его ключи
        for (const key in obj) {
            // Копируем каждое свойство в результирующий объект
            result[key] = obj[key]
        }
    }

    return result
}
