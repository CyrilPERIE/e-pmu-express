import { sModelParticipant } from "../models/Participant";
import { ParticipantRepository } from "../repositories/Participant";
import { dateParams } from "../utils/models";

export class ParticipantService {

    static async postParticipant(reqParams: dateParams, participant: sModelParticipant){
        return await ParticipantRepository.postParticipant(<dateParams>reqParams, <sModelParticipant>participant);
    }

    static async getParticipants(id_course: string){
        return await ParticipantRepository.getParticipants(<string>id_course); 
    }
}