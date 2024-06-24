import { sModelParticipant } from "../models/Participant.js";
import { ParticipantRepository } from "../repositories/Participant.js";
import { getPredictions } from "../utils/domains/getPrediction.js";
import { dateParams } from "../utils/models.js";

export class ParticipantService {

    static async postParticipant(reqParams: dateParams, participant: sModelParticipant){
        return await ParticipantRepository.postParticipant(<dateParams>reqParams, <sModelParticipant>participant);
    }

    static async getParticipants(id_course: string){
        return await ParticipantRepository.getParticipants(<string>id_course); 
    }
}