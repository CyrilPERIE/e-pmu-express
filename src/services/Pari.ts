import { sModelPari } from "../models/Pari";
import { PariRepository } from "../repositories/Pari";
import { dateParams } from "../utils/models";

export class PariService {

    static async postPari(reqParams: dateParams, pari: sModelPari){
        return await PariRepository.postPari(<dateParams>reqParams, <sModelPari>pari);
    }
}