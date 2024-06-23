import { DatePMU } from "../util/class/datePMU.js";
import { scrapProgramme } from "../scrapers/scrapProgramme.js";
import { scrapCotesDefinitives } from "../scrapers/scrapCotesDefinitives.js";

const recuperationComplete = async (start_date: string | number | Date = "2013-03-01") => {

    //Récupération des programmes
    let startDate = new Date(start_date);
    startDate.setHours(0, 0, 0, 0)
    let endDate = new Date();
    endDate.setHours(0, 0, 0, 0)
    while (startDate <= endDate) {
        await scrapProgramme(new DatePMU(startDate))
        startDate.setDate(startDate.getDate() + 1);
    }
    
    //Récupération des côtes
    startDate = new Date(startDate);
    startDate.setHours(0, 0, 0, 0)
    const yesterday = new Date();
    yesterday.setHours(0, 0, 0, 0)
    yesterday.setDate(yesterday.getDate() - 1)
    while (startDate <= yesterday) {
        await scrapCotesDefinitives(new DatePMU(startDate))
        startDate.setDate(startDate.getDate() + 1);
    }

}

export default recuperationComplete;