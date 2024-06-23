import recuperationComplete from "../scraper/setup/recuperation_complete.js";
import { DatePMU } from "../scraper/util/class/datePMU.js";
import { ProgrammeService } from "../services/Programme.js";

function getDatesArray(startDate: number | Date | string): DatePMU[] {
    const datesArray: DatePMU[] = [];
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    let date = new Date(startDate);
    date.setHours(0, 0, 0, 0);
    
    while (!(date > currentDate)) {
      datesArray.push(new DatePMU(new Date(date)));
      date.setDate(date.getDate() + 1);
    }
  
    return datesArray;
}
  
function isToday (someDate: Date | number | string) {
    const today = new Date()
    const paramDate = new Date(someDate)
    return paramDate.getDate() == today.getDate() &&
    paramDate.getMonth() == today.getMonth() &&
    paramDate.getFullYear() == today.getFullYear()
  }
  
export const retrieveMissingDatasSinceLastLaunch = async () => {
    const date = await ProgrammeService.getLastDate();
    if(!date) await recuperationComplete()
    else if(!isToday(date.dataValues.date)){
        await recuperationComplete(date.dataValues.date)
    }
}

export const onStartUp = async () => {
    await retrieveMissingDatasSinceLastLaunch()
}