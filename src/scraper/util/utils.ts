/**
 * @module utils
 */

/**
    * Permet de convertir une date en date utilisable par l'API PMU
    * 
    * @param {Date} date 
*/
export function dateToPmuDate(date: Date): String {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}${month}${year}`
}

export function oneOf(list: any[]): any {
    const randomIndex = Math.floor(Math.random() * list.length);
    const randomElem = list[randomIndex];
    return randomElem
}