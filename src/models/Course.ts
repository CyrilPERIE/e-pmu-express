import * as Sequelize from "sequelize";
import { sequelize } from "../instances/sequelize.js";
import { Course as sCourse } from "../common/models/course.js";

export type sModelCourse = Sequelize.Model<sCourse & {
    id: number
}>

export const Course = sequelize.define<sModelCourse>('courses', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    cached: Sequelize.BOOLEAN,
    departImminent: Sequelize.BOOLEAN,
    arriveeDefinitive: Sequelize.BOOLEAN,
    timezoneOffset: Sequelize.BIGINT,
    numReunion: Sequelize.BIGINT,
    numExterneReunion: Sequelize.BIGINT,
    numOrdre: Sequelize.BIGINT,
    numExterne: Sequelize.BIGINT,
    heureDepart: Sequelize.BIGINT,
    libelle: Sequelize.TEXT,
    libelleCourt: Sequelize.TEXT,
    montantPrix: Sequelize.BIGINT,
    parcours: Sequelize.TEXT,
    distance: Sequelize.BIGINT,
    distanceUnit: Sequelize.TEXT,
    corde: Sequelize.TEXT,
    discipline: Sequelize.TEXT,
    specialite: Sequelize.TEXT,
    categorieParticularite: Sequelize.TEXT,
    conditionSexe: Sequelize.TEXT,
    nombreDeclaresPartants: Sequelize.BIGINT,
    grandPrixNationalTrot: Sequelize.BOOLEAN,
    numSocieteMere: Sequelize.BIGINT,
    pariMultiCourses: Sequelize.BOOLEAN,
    pariSpecial: Sequelize.BOOLEAN,
    montantTotalOffert: Sequelize.BIGINT,
    montantOffert1er: Sequelize.BIGINT,
    montantOffert2eme: Sequelize.BIGINT,
    montantOffert3eme: Sequelize.BIGINT,
    montantOffert4eme: Sequelize.BIGINT,
    montantOffert5eme: Sequelize.BIGINT,
    conditions: Sequelize.TEXT,
    numCourseDedoublee: Sequelize.BIGINT
})

