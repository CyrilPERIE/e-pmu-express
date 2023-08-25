import { sModelProgramme } from "../models/Programme";
import { ProgrammeRepository } from "../repositories/Programme";
import { dateParams, offsetLimit } from "../utils/models";

export class ProgrammeService {

    static async post(programme: sModelProgramme){
        return await ProgrammeRepository.post(<sModelProgramme>programme); 
    }

    static async getAllDates(){
        return await ProgrammeRepository.getAllDates(); 
    }

    static async getReunionByDate(pmuDate: string){
        return await ProgrammeRepository.getReunionByDate(<string>pmuDate); 
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