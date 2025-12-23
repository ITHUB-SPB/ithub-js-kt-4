/**
 * @param {Object} object - Проверяемый объект
 * @param {String[]} keys - Проверяемые ключи

 * @returns {Object<string, boolean>}
 * 
 * @throws Выбрасывает исключение на пустом массиве ключей
 * 
 * @description Функция принимает на вход объект и название ключей
 * и возвращает объект с информацией о наличии каждого из них
 * 
 * @example
 * сheckObject({ id: 1, particle: 10 }, ["particle", "tag"])  // { particle: true, tag: false }
 */
export function checkObject(object, keys) {
  if (!Array.isArray(keys) || keys.length === 0 ) { //проверяем заданы ли ключи
    throw new Error('Ключи не заданы')  //если нет - ошибка
  } 
    const bee = {}
  for (const i of keys) { //пробегаемся по ключам
    bee[i] = i in object // пробегаемся по индексам и передаем значение в новые объект
  }
  return bee
}
