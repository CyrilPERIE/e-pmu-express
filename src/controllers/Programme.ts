import { Request, Response } from "express";
import { sModelProgramme } from "../models/Programme.js";
import { ProgrammeService } from "../services/Programme.js";
import { dateParams, offsetLimit } from "../utils/models.js";

export class ProgrammeController {

  static async post(req: Request, res: Response) {
    return await ProgrammeService.post(<sModelProgramme>req.body)
    .then(obj => res.status(201).json(obj))
    .catch(e => { console.error(e); res.status(500).send("Internal Error") });

  }

  static async getAllDates(req: Request, res: Response) {
    return await ProgrammeService.getAllDates()
    .then(obj => res.status(200).json(obj))
    .catch((e) => { console.error(e); res.status(500).send("Internal Error") });

  }

  static async getReunionByDate(req: Request, res: Response) {
    return await ProgrammeService.getReunionByDate(<string>req.params.datePMU)
    .then(obj => res.status(200).json(obj))
    .catch((e) => { console.error(e); res.status(500).send("Internal Error") });

  }

  static async delete(req: Request, res: Response) {
    return await ProgrammeService.delete(<string>req.params.datePMU)
    .then(obj => res.status(201).json(obj))
    .catch(e => { console.error(e); res.status(500).send("Internal Error") });

  }

  static async getCoursesByReunionId(req: Request, res: Response) {
    return await ProgrammeService.getCoursesByReunionId(Number(req.params.reunion_id))
    .then(obj => res.status(200).json(obj))
    .catch((e) => { console.error(e); res.status(500).send("Internal Error") });

  }

  static async getCourseId(req: Request, res: Response) {
        const reqParams: dateParams = {
            datePMU: req.params.datePMU,
            reunion: req.params.reunion,
            course: req.params.course
        }
    return await ProgrammeService.getCourseId(<dateParams>reqParams)
    .then(obj => res.status(200).json(obj))
    .catch((e) => { console.error(e); res.status(500).send("Internal Error") });

  }

  static async getDataset(req: Request, res: Response) {
    const ep_utilite: string = req.params.ep_utilite
    const offsetLimit: offsetLimit = {
        offset: req.body.offset ? req.body.offset: 0,
        limit: req.body.limit ? req.body.limit < 50 ? req.body.limit: 50 : 50
    }
    const specialite = req.body.specialite
    return await ProgrammeService.getDataset(<string>ep_utilite, offsetLimit, specialite)
    .then(obj => res.status(200).json(obj))
    .catch((e) => { console.error(e); res.status(500).send("Internal Error") });

  }

  
}