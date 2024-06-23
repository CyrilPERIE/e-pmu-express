import { Op, Sequelize } from "sequelize";
import { User, sModelUser } from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Role } from "../common/models/role.js";

export class UserRepository {
    static async login(username: string, password: string) {
        return await User.findOne({ where: { username } })
        .then((results) => {
            if (bcrypt.compareSync(password, results.dataValues.password)) {
                const payload = {
                username: results.dataValues.username,
                role: results.dataValues.role
                };
                const options = {
                expiresIn: '3d',
                };
                const token = jwt.sign(payload, process.env.SECRET_KEY_JWT, options);
                return token;
            }
            else {
                return "Mauvaise combinaise username/mot de passe"
            }
        })
        .catch((err) => console.log(err));
    }

    static async register(username: string, password: string, email: string) {

        const hash = bcrypt.hashSync(password, 10);

        const [user, created] = await User.findOrCreate({
            where: {
              [Op.or]: [{ username }, { email }],
            },
            defaults: { username, email, password: hash, role: Role.UTILISATEUR },
          });


        if (created) {
            return user.toJSON().id
        } else {
            return user.toJSON().id
        }
    }
}
