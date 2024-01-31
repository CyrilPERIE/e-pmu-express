import { Course } from "./Course.js";
import { Hippodrome } from "./Hippodrome.js";
import { Meteo } from "./Meteo.js";
import { Pari } from "./Pari.js";
import { Participant } from "./Participant.js";
import { Penetrometre } from "./Penetrometre.js"
import { Programme } from "./Programme.js";
import { Rapports } from "./Rapports.js";
import { Reunion } from "./Reunion.js";
import { User } from "./User.js";

export async function defineRelationBetweenObjects() {

    Programme.hasMany(Reunion, {
        foreignKey: 'id_programme'
    });
    Reunion.belongsTo(Programme, {
        foreignKey: 'id_programme'
    });

    
    Reunion.hasOne(Hippodrome, {
        foreignKey: 'id_reunion'
    });
    Hippodrome.belongsTo(Reunion, {
        foreignKey: 'id_reunion'
    });

    
    Reunion.hasMany(Course, {
        foreignKey: 'id_reunion'
    });
    Course.belongsTo(Reunion, {
        foreignKey: 'id_reunion'
    });

    
    Course.hasOne(Penetrometre, {
        foreignKey: 'id_course'
    });
    Penetrometre.belongsTo(Course, {
        foreignKey: 'id_course'
    });


    Course.hasMany(Pari, {
        foreignKey: 'id_course'
    });
    Pari.belongsTo(Course, {
        foreignKey: 'id_course'
    });


    Pari.hasMany(Rapports, {
        foreignKey: 'id_paris'
    });
    Rapports.belongsTo(Pari, {
        foreignKey: 'id_paris'
    });


    Course.hasMany(Participant, {
        foreignKey: 'id_course'
    });
    Participant.belongsTo(Course, {
        foreignKey: 'id_course'
    });

    
    Reunion.hasOne(Meteo, {
        foreignKey: 'id_reunion'
    });
    Meteo.belongsTo(Reunion, {
        foreignKey: 'id_reunion'
    });


    await User.sync()
    await Programme.sync()
        await Reunion.sync()
        await Hippodrome.sync()
        await Course.sync()
            await Penetrometre.sync()
            await Pari.sync()
                await Rapports.sync()
            await Participant.sync()
        await Meteo.sync()
}