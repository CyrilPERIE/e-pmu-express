import { DatePMU } from "../util/class/datePMU.js";
import { scrapProgramme } from "../scrapers/scrapProgramme.js";
import { scrapCotesDefinitives } from "../scrapers/scrapCotesDefinitives.js";

const recuperationDemo = async () => {

    let INIT_DATE = new Date();
    INIT_DATE.setDate(INIT_DATE.getDate() - 10);

    //Récupération des programmes
    let startDate = INIT_DATE;
    let endDate = new Date();
    while (startDate <= endDate) {
        await scrapProgramme(new DatePMU(startDate))
        startDate.setDate(startDate.getDate() + 1);
    }
    
    //Récupération des côtes
    startDate = INIT_DATE;
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1)
    while (startDate <= yesterday) {
        await scrapCotesDefinitives(new DatePMU(startDate))
        startDate.setDate(startDate.getDate() + 1);
    }

}

export default recuperationDemo
