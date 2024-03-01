import * as Sequelize from "sequelize";
import { sequelize } from "../instances/sequelize.js";
import { Penetrometre as sPenetrometre } from "../common/models/penetrometre.js";

export type sModelPenetrometre = Sequelize.Model<sPenetrometre & {
    id: number
}>

export const Penetrometre = sequelize.define<sModelPenetrometre>('penetrometres', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    valeurMesure: Sequelize.TEXT,
    heureMesure: Sequelize.TEXT,
    intitule: Sequelize.TEXT,
    commentaire: Sequelize.TEXT
})

