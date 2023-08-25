import * as Sequelize from 'sequelize'
import { sequelize } from '../instances/sequelize'
import { User as sUser } from '../common/models/user'

export type sModelUser = Sequelize.Model<sUser & {
    id: number
}>

export const User = sequelize.define<sModelUser>('users', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    jwtoken: {
        type: Sequelize.STRING,
    },
    role: {
        type: Sequelize.STRING,
    }
}, {
    createdAt: false,
    updatedAt: false,
})

