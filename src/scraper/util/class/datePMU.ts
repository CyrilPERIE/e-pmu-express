import { dateToPmuDate } from "../utils.js"

/**
 * Pour le scraping la date est essentielle pour la génération des URLs
 */
export class DatePMU {
    datePMU: String

    constructor(date: Date) {
        this.datePMU = dateToPmuDate(date)
    }

    toString(): string {
        return `${this.datePMU}`
    }
}