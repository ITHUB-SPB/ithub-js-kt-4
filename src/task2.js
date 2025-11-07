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
    let masked = []

    for (const card of cards) {
        let partsOfCard = card.split(' ')
        partsOfCard[1] = '****'
        partsOfCard[2] = '****'

        masked.push({ initial: card, masked: partsOfCard.join(' ') })
    }

    return masked
}
