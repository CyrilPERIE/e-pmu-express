import * as Sequelize from "sequelize";
import { sequelize } from "../instances/sequelize.js";
import { Participant as sParticipant } from "../common/models/participant.js";

export type sModelParticipant = Sequelize.Model<sParticipant & {
    id: number,
    id_course?:number
}>

export const Participant = sequelize.define<sModelParticipant>('participants', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    nom: Sequelize.TEXT,
    numPmu: Sequelize.INTEGER,
    age: Sequelize.INTEGER,
    sexe: Sequelize.TEXT,
    race: Sequelize.TEXT,
    statut: Sequelize.TEXT,
    placeCorde: Sequelize.INTEGER,
    oeilleres: Sequelize.TEXT,
    proprietaire: Sequelize.TEXT,
    entraineur: Sequelize.TEXT,
    driver: Sequelize.TEXT,
    driverChange: Sequelize.BOOLEAN,
    indicateurInedit: Sequelize.BOOLEAN,
    musique: Sequelize.TEXT,
    nombreCourses: Sequelize.INTEGER,
    nombreVictoires: Sequelize.INTEGER,
    nombrePlaces: Sequelize.INTEGER,
    nombrePlacesSecond: Sequelize.INTEGER,
    nombrePlacesTroisieme: Sequelize.INTEGER,
    handicapValeur: Sequelize.INTEGER,
    nomPere: Sequelize.TEXT,
    nomMere: Sequelize.TEXT,
    nomPereMere: Sequelize.TEXT,
    ordreArrivee: Sequelize.INTEGER,
    ordreArriveeEstimee: Sequelize.DOUBLE,
    jumentPleine: Sequelize.BOOLEAN,
    engagement: Sequelize.BOOLEAN,
    supplement: Sequelize.INTEGER,
    handicapPoids: Sequelize.INTEGER,
    poidsConditionMonteChange: Sequelize.BOOLEAN,
    urlCasaque: Sequelize.TEXT,
    allure: Sequelize.TEXT
})

