import * as Sequelize from 'sequelize'
import { sequelize } from '../instances/sequelize'
import { Reunion as sReunion } from '../../../common/models/reunion'

type sModelReunion = Sequelize.Model<sReunion & {
    id: number
}>

export const Reunion = sequelize.define<sModelReunion>('reunions', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    cached: Sequelize.BOOLEAN,
    timezoneOffset: Sequelize.BIGINT,
    dateReunion: Sequelize.BIGINT,
    numOfficiel: Sequelize.BIGINT,
    numOfficielReunionPrecedente: Sequelize.BIGINT,
    numOfficielReunionSuivante: Sequelize.BIGINT,
    numExterne: Sequelize.BIGINT,
    nature: Sequelize.TEXT,
    audience: Sequelize.TEXT,
    statut: Sequelize.TEXT,
    disciplinesMere: Sequelize.JSON,
    specialites: Sequelize.JSON,
    derniereReunion: Sequelize.BOOLEAN,
    offresInternet: Sequelize.BOOLEAN,
    reportPlusFpaMax: Sequelize.BIGINT,
})

