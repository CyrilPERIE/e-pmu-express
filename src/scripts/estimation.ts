import { ParticipantRepository } from "../repositories/Participant.js";
import { ProgrammeRepository } from "../repositories/Programme.js";
import { DatePMU } from "../scraper/util/class/datePMU.js";
import { getPredictions } from "../utils/domains/getPrediction.js";

// Batsh pour ajouter une estimation d'arrivée à toutes les courses de type plat.
export async function estimateEverything(date? : Date | number | string) {
    let dates: string[];
    if(!date) {
        dates = await ProgrammeRepository.getAllDates() || [];
    }
    else {
        dates = [new DatePMU(new Date(date)).datePMU]
    }

    if (!dates) return;
    for (const date of dates) {
        const reunions = await ProgrammeRepository.getReunionByDate(date);
        if (!reunions) continue;
        for (const reunion of reunions) {
            const courses = await ProgrammeRepository.getCoursesByReunionId(reunion.dataValues.id);
            if (!courses) continue;
            for (const course of courses) {
                const participants = await ParticipantRepository.getParticipants(course.dataValues.id.toString());
                if (!participants) continue;
                const participants_predicted = await getPredictions(course.dataValues.id.toString(), participants)
                for(const participant of participants_predicted) {
                    await ParticipantRepository.updateParticipantOrdreArriveeEstimee(participant.id.toString(), participant.ordreArriveeEstimee)
                }
            }
        }
    }
};
