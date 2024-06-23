import { UserRepository } from "../repositories/User.js";

export class UserService {

    static async login(username: string, password: string){
        return await UserRepository.login(username, password);
    }

    static async register(username: string, password: string, email: string){
        return await UserRepository.register(username, password, email);
    }
}