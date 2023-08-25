import * as Sequelize from 'sequelize'
import { sequelize } from '../instances/sequelize'
import { Pari as sPari } from '../../../common/models/pari'

export type sModelPari = Sequelize.Model<sPari & {
    id: number
    id_course?:number
}>

export const Pari = sequelize.define<sModelPari>('paris', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    typePari: Sequelize.TEXT,
    miseBase: Sequelize.INTEGER,
    rembourse: Sequelize.BOOLEAN,
    audience: Sequelize.TEXT,
    famillePari: Sequelize.TEXT,
    dividendeUnite: Sequelize.TEXT
})

