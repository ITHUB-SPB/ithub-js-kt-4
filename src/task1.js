/**
 * @param {{"word": string}[]} wordObjects - Объекты со словами
 *
 * @returns {undefined}
 *
 * @throws Выбрасывает исключение, если вызвана без аргументов
 *
 * @description Функция принимает на вход неопределенное количество
 * объектов с ключом `word` и выводит кумулятивную строку в консоль
 * по примеру
 *
 * @example
 * logString({ word: "Hello" }, { word: "world!" }) // "Hello world!"
 * logString({ word: "Hi" }, { word: "my" }, { word: "name" }, { word: "is..." }) // "Hi my name is..."
 */
export function logString(...wordObjects) {
    if (wordObjects.length === 0) {
      throw new Error("Отсутствуют объекты для вывода")
    }
    
    const result = wordObjects.map((str) => Object.values(str)).join(' ')

        
    console.log(result)
    return
}
