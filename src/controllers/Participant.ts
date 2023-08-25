import { Request, Response } from "express";
import { sModelParticipant } from "../models/Participant";
import { ParticipantService } from "../services/Participant";
import { dateParams } from "../utils/models";

export class ParticipantController {

    static async postParticipant(req: Request, res: Response){
        const reqParams: dateParams = {
            datePMU: req.params.datePMU,
            reunion: req.params.reunion,
            course: req.params.course
        }
        return await ParticipantService.postParticipant(<dateParams>reqParams, <sModelParticipant>req.body)
        .then(obj => res.status(201).json(obj))
        .catch(e => { console.error(e); res.status(500).send("Internal Error") });
    }

  static async getParticipants(req: Request, res: Response) {
    return await ParticipantService.getParticipants(<string>req.params.course_id)
    .then(obj => res.status(200).json(obj))
    .catch((e) => { console.error(e); res.status(500).send("Internal Error") });

  }
}