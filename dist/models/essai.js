import * as Sequelize from 'sequelize';
import { sequelize } from '../instances/sequelize';
export const Essai = sequelize.define('Essai', {
    id_essai: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    value: Sequelize.STRING,
    valueInt: Sequelize.INTEGER
});
sequelize.sync().then(() => {
    console.log('Essai table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});
