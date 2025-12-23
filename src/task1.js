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
        //вордобджекс - объект, проверям пустой ли массив
        throw new Error('Отсутствуют объекты для вывода') //вывод ошибки
    }
    const buuu = wordObjects.map((i) => i.word).join(' ') //извлекаем слово из каждого объекта, и объединяем.
    // Мап - метод массива, пробегается по массиву. Джоин - превращает массив в строку
    console.log(buuu)
}
