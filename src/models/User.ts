import * as Sequelize from "sequelize";
import { sequelize } from "../instances/sequelize.js";
import { User as sUser } from "../common/models/user.js";

export type sModelUser = Sequelize.Model<sUser & {
    id: number
}>

export const User = sequelize.define<sModelUser>('users', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    role: {
        type: Sequelize.STRING,
    }
}, {
    createdAt: false,
    updatedAt: false,
})

