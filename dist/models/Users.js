import * as Sequelize from 'sequelize';
import { sequelize } from '../instances/sequelize';
export const EssaiModel = sequelize.define('essai', {
    id_essai: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    value: Sequelize.STRING,
    valueInt: Sequelize.NUMBER
});
