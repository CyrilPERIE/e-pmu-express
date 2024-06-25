import { sModelProgramme } from "../models/Programme.js";
import { ProgrammeRepository } from "../repositories/Programme.js";
import { dateParams, offsetLimit } from "../utils/models.js";

export class ProgrammeService {

    static async post(programme: sModelProgramme){
        return await ProgrammeRepository.post(<sModelProgramme>programme); 
    }

    static async getAllDates(){
        return await ProgrammeRepository.getAllDates(); 
    }

    static async getLastDate() {
        return await ProgrammeRepository.getLastDate();
    }

    static async getReunionByDate(pmuDate: string){
        return await ProgrammeRepository.getReunionByDate(<string>pmuDate); 
    }

    static async delete(pmuDate: string){
        return await ProgrammeRepository.delete(<string>pmuDate); 
    }

    static async getCoursesByReunionId(id_reunion: number){
        return await ProgrammeRepository.getCoursesByReunionId(<number>id_reunion); 
    }

    static async getCourseId(reqParams: dateParams){
        return await ProgrammeRepository.getCourseId(<dateParams>reqParams); 
    }

    static async getDataset(ep_utilite: string, offsetLimit: offsetLimit, specialite: string){
        return await ProgrammeRepository.getDataset(<string>ep_utilite, offsetLimit, specialite); 
    }
}