import * as Sequelize from 'sequelize'
import { sequelize } from '../instances/sequelize'
import { Programme as sProgramme } from '../common/models/programme'

export type sModelProgramme = Sequelize.Model<sProgramme> & {
    datePMU: string
}

export const Programme = sequelize.define<sModelProgramme>('programmes', {
    datePMU: {
        type: Sequelize.STRING(8),
        primaryKey: true
    },
    cached: Sequelize.BOOLEAN,
    date: Sequelize.BIGINT,
    dateProgrammeActif: Sequelize.BIGINT,
    timezoneOffset: Sequelize.BIGINT,
    prochainesCoursesAPartir: Sequelize.JSON,
    datesProgrammesDisponibles: Sequelize.JSON,
    ep_utilite: Sequelize.STRING
})

