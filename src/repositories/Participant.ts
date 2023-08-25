import { Participant, sModelParticipant } from "../models/Participant";import { getPredictions } from "../utils/domains/getPrediction";
;
import { dateParams } from "../utils/models";
import { ProgrammeRepository } from "./Programme";

export class ParticipantRepository {
    static async postParticipant(reqParams: dateParams, participant: sModelParticipant) {
        //Permet de récupérer l'id de la course pour la fournir en tant que clé étrangère au cheval
        return await ProgrammeRepository.getCourseId(reqParams).then((courseId: number) => {
            Participant.create({
                ...participant, "id_course": courseId,
            })
        }).catch(() => console.log("Error !"));;
    }

    static async getParticipants(id_course: string) {
        return await Participant.findAll({
            where: {
                "id_course": id_course
            },
            order: [
                ['numPmu', 'ASC']
            ]
        }).then(async (results) => await getPredictions(id_course, results))
        .catch((err) => console.log(err));        
    }
}