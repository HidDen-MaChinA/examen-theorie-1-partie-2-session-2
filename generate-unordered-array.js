import {arrayContain} from "./array-contain";

export function generateUnorderedArray(size) {
    let array = [];
    for (let i = 0; i < size; i++) {
        let number = Math.floor(Math.random() * 100);
        while (arrayContain(array, number)) {
            number = Math.floor(Math.random() * 100);
        }
        array.push(number);
    }
    return array;
}