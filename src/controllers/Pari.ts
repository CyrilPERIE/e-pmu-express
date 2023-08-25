import { Request, Response } from "express";
import { sModelPari } from "../models/Pari";
import { PariService } from "../services/Pari";
import { dateParams } from "../utils/models";

export class PariController {

    static async postPari(req: Request, res: Response){
        const reqParams: dateParams = {
            datePMU: req.params.datePMU,
            reunion: req.params.reunion,
            course: req.params.course
        }
        return await PariService.postPari(<dateParams>reqParams, <sModelPari>req.body)
        .then(obj => res.status(201).json(obj))
        .catch(e => { console.error(e); res.status(500).send("Internal Error") });
    }
}