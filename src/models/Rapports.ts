import * as Sequelize from 'sequelize'
import { sequelize } from '../instances/sequelize'
import { Rapports as sRapports } from '../../../common/models/pari'

export type sModelRapports = Sequelize.Model<sRapports & {
    id: number
}>

export const Rapports = sequelize.define<sModelRapports>('rapports', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    libelle: Sequelize.TEXT,
    dividende: Sequelize.INTEGER,
    dividendePourUnEuro: Sequelize.INTEGER,
    combinaison: Sequelize.JSON,
    nombreGagnants: Sequelize.INTEGER,
    dividendePourUneMiseDeBase: Sequelize.INTEGER,
    dividendeUnite: Sequelize.TEXT,
})

