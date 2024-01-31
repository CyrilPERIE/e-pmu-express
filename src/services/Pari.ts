import { sModelPari } from "../models/Pari.js";
import { PariRepository } from "../repositories/Pari.js";
import { dateParams } from "../utils/models.js";

export class PariService {

    static async postPari(reqParams: dateParams, pari: sModelPari){
        return await PariRepository.postPari(<dateParams>reqParams, <sModelPari>pari);
    }
}