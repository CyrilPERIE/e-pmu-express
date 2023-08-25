import * as Sequelize from 'sequelize'
import { sequelize } from '../instances/sequelize'
import { Meteo as sMeteo } from '../common/models/meteo'

export type sModelMeteo = Sequelize.Model<sMeteo & {
    id: number
}>

export const Meteo = sequelize.define<sModelMeteo>('meteos', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    datePrevision: Sequelize.BIGINT,
    nebulositeCode: Sequelize.TEXT,
    nebulositeLibelleCourt: Sequelize.TEXT,
    nebulositeLibelleLong: Sequelize.TEXT,
    temperature: Sequelize.BIGINT,
    forceVent: Sequelize.BIGINT,
    directionVent: Sequelize.TEXT
})

