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
    // [{ word: "Hello" }, { word: "world!" }].map(object => object.word)
    // const memap = Object.values(wordObjects)

    console.log(wordObjects.map((object) => object.word).join(' '))
}
