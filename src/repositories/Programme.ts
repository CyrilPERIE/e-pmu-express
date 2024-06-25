import { Course } from "../models/Course.js";
import { Hippodrome } from "../models/Hippodrome.js";
import { Meteo } from "../models/Meteo.js";
import { Participant } from "../models/Participant.js";
import { Penetrometre } from "../models/Penetrometre.js";
import { Programme, sModelProgramme } from "../models/Programme.js";
import { Reunion } from "../models/Reunion.js";
import { dateParams, offsetLimit } from "../utils/models.js";

export class ProgrammeRepository {

    static async post(programme: sModelProgramme) {
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

    static async getLastDate() {
        return await Programme.findOne({
            attributes: ["date"],
            order: [
                ['date', 'DESC']
            ]
        }).then((result) => result)
        .catch((err) => console.log(err));
    }

    static async getReunionByDate(pmuDate: string) {
        return await Reunion.findAll({
            where: {
                "id_programme": pmuDate
            },
            order: [
                ['numOfficiel', 'ASC']
            ],
            include: [
                {
                    model: Meteo
                },
                {
                    model: Hippodrome
                },
                {
                    model: Course,
                    include: [
                        {
                            model: Participant
                        }
                    ]
                }
            ]
        }).then((results) => results)
        .catch((err) => console.log(err));
    }

    static async delete(pmuDate: string) {
        return await Programme.destroy({
            where: { "datePMU": pmuDate }
        }).then(() => {
            console.log('Programme and all associated entities deleted');
        }).catch((err) => {
            console.error('Error deleting programme:', err);
        });
    }

    static async getCoursesByReunionId(id_reunion: number) {
        return await Course.findAll({
            where: {
                "id_reunion": id_reunion
            },
            order: [
                ['numExterne', 'ASC']
            ],
            include: [
                {
                    model: Participant
                }
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
