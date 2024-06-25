import { dateToPmuDate } from "../utils.js"

/**
 * Pour le scraping la date est essentielle pour la génération des URLs
 */
export class DatePMU {
    datePMU: string
    date: Date

    constructor(date: Date) {
        this.date = date
        this.datePMU = dateToPmuDate(date)
    }

    toDate(): Date {
        return this.date
    }

    toString(): string {
        return `${this.datePMU}`
    }
}