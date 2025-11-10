/**
 * @param {string[]} cards - Массив исходных строк
 * 
 * @returns {string[]}
 *
 * @description Функция принимает на вход массив строк,
 * описывающих номера банковских карт, и возвращает массив
 * объектов с исходными и маскированными строками по примеру
 * 
 * @example
 * const data = [
 *   '4000 0012 0056 9499',
 *   '4000 0013 5456 7379',
 * ]
 * 
 * console.log(withMask(data)) // [ { initial: '4000 0012 0056 9499', masked: '4000 **** **** 9499' }, { initial: '4000 0013 5456 7379', masked: '4000 **** **** 7379' }]
 * 
 */
export function withMask(cards) {
        const maskedData = []
    
        for (const card of cards) {
            let splittedCard = card.split(' ') // разделяем по пробелам
            maskedData.push({   //push: Добавляет один или несколько элементов в конец массива
                initial: card,
                masked: `${splittedCard[0]} **** **** ${splittedCard[3]}`,
            })
        }
    
        return maskedData
    

}
