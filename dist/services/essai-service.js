import { EssaiRepository } from "../repositories/essai-repository";
export class EssaiService {
    static async delete(id) {
        return await EssaiRepository.delete(id);
    }
    static async get() {
        return await EssaiRepository.get();
    }
    static async getById(id) {
        return await EssaiRepository.getById(id);
    }
    static async patch(essai) {
        await EssaiRepository.patch(essai);
    }
    static async post(essai) {
        await EssaiRepository.post(essai);
    }
}
