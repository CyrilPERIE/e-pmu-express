import { Course } from "../models/Course";
import { Hippodrome } from "../models/Hippodrome";
import { Meteo } from "../models/Meteo";
import { Participant } from "../models/Participant";
import { Penetrometre } from "../models/Penetrometre";
import { Programme, sModelProgramme } from "../models/Programme";
import { Reunion } from "../models/Reunion";
import { dateParams, offsetLimit } from "../utils/models";

export class ProgrammeRepository {

    static async post(programme: sModelProgramme) {
        console.log(programme)
        return await Programme.create(programme, {
            include: [{ model: Reunion, include: [{ model: Hippodrome }, { model: Meteo }, { model: Course, include:[{model: Penetrometre}]}] }]
        }).catch((err) => console.log(err));
    }

    static async getAllDates() {
        return await Programme.findAll({
            attributes: ["datePMU"],
            order: [
                ['date', 'ASC']
            ]
        }).then((results) => results.map(result => result.datePMU))
        .catch((err) => console.log(err));
    }

    static async getReunionByDate(pmuDate: string) {
        return await Reunion.findAll({
            attributes: ["id", "numOfficiel", "specialites"],
            where: {
                "id_programme": pmuDate
            },
            order: [
                ['numOfficiel', 'ASC']
            ]
        }).then((results) => results)
        .catch((err) => console.log(err));
    }

    static async getCoursesByReunionId(id_reunion: number) {
        return await Course.findAll({
            attributes: ["id", "numExterne"],
            where: {
                "id_reunion": id_reunion
            },
            order: [
                ['numExterne', 'ASC']
            ]
        }).then((results) => results)
        .catch((err) => console.log(err));
    }

    static async getCourseId(reqParams: dateParams) {
        return await Programme.findOne({
            where: { datePMU: reqParams.datePMU },
            include: [{
                model: Reunion,
                where: { numOfficiel: reqParams.reunion },
                include: [{
                    model: Course,
                    where: { numOrdre: reqParams.course },
                }]
            }]
        }).then((programme: sModelProgramme & { reunions: { courses: { id: number } } }) => programme.reunions[0].courses[0].id)
    }

    static async getDataset(ep_utilite: string, offsetLimit: offsetLimit, specialite: string = "PLAT") {
        return await Programme.findAll({
            limit: Number(offsetLimit.limit),
            offset: Number(offsetLimit.offset),
            order: [
                ['date', 'DESC']
            ],
            where: { ep_utilite: ep_utilite },
            include: [{
                model: Reunion,
                include: [{
                    model: Course,
                    where: {specialite: specialite },
                    include: [{
                        model: Participant
                    }]
                }]
            }]
        })
    }
}
