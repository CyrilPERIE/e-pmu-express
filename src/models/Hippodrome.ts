import * as Sequelize from "sequelize";
import { sequelize } from "../instances/sequelize.js";
import { Hippodrome as sHippodrome } from "../common/models/hippodrome.js";

export type sModelHippodrome = Sequelize.Model<sHippodrome & {
    id: number
}>

export const Hippodrome = sequelize.define<sModelHippodrome>('hippodromes', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    code: Sequelize.TEXT,
    libelleCourt: Sequelize.TEXT,
    libelleLong: Sequelize.TEXT
})

