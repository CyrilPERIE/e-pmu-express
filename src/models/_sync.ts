import { Course } from "./Course";
import { Hippodrome } from "./Hippodrome";
import { Meteo } from "./Meteo";
import { Pari } from "./Pari";
import { Participant } from "./Participant";
import { Penetrometre } from "./Penetrometre"
import { Programme } from "./Programme";
import { Rapports } from "./Rapports";
import { Reunion } from "./Reunion";
import { User } from "./User";

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