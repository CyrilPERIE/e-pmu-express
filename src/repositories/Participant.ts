import { Participant, sModelParticipant } from "../models/Participant.js";
import { dateParams } from "../utils/models.js";
import { ProgrammeRepository } from "./Programme.js";

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
        }).then(async (results) => results)
        .catch((err) => console.log(err));        
    }

    static async updateParticipantOrdreArriveeEstimee(id_participant: string, ordreArriveeEstimee_participant: number) {
        return await Participant.update(
            { ordreArriveeEstimee: ordreArriveeEstimee_participant },
            {
              where: {
                id: id_participant
              }
            }
          ).then(() => {
            // console.log('Mise à jour réussie');
          }).catch((error) => {
            console.error('Erreur lors de la mise à jour', error);
          });
    }
}
