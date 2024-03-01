import { User } from "../models/User.js";
import jwt from "jsonwebtoken";


export class UserRepository {
    static async login(username: string, password: string) {
        return await User.findOne({ where: { username } })
        .then((results) => {
            if (password === results.dataValues.password) {
                // Your secret key should be a secure and random string used to sign the token.
                const secretKey = process.env.SECRET_KEY;
                // Payload data that you want to include in the token (e.g., user ID, roles, etc.).
                const payload = {
                username: results.dataValues.username,
                role: results.dataValues.role
                };
                // Options for the token, including the expiry time.
                const options = {
                expiresIn: '3d', // Token will expire in 3 days
                };

                // Generate the token
                const token = jwt.sign(payload, secretKey, options);
                return token;
            }
        })
        .catch((err) => console.log(err));; 
    }
}
