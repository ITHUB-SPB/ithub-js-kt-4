import { multipliedByN } from "./task1.js";
import { calculateSum } from "./task2.js";
import { reverseArray } from "./task3.js";
import { hasCorrectElement } from "./task4.js";

const data = [ {id: 1, name: 'apple'}, {id: 2, name: 'qiwi'}, {} ]
console.log(extractValues(data));

const data2 = ['4000 0012 0056 9499','4000 0013 5456 7379', ]
console.log(withMask(data2))

const firstObject = { id: 1 }
const secondObject = { status: 'draft', created: "2025-05-05" }
joinObjects(firstObject, secondObject)
     