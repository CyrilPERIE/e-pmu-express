import { Essai } from "../models/essai";
export class EssaiRepository {
    static async delete(id) {
        return await Essai.destroy({
            where: {
                id_essai: id
            }
        });
    }
    static async get() {
        return await Essai.findAll({});
    }
    static async getById(id) {
        return await Essai.findByPk(id);
    }
    static async patch(essai) {
        console.log("J'essaye", essai);
        return await Essai.update(essai, {
            where: {
                id_essai: essai.id_essai
            }
        });
    }
    static async post(essai) {
        await Essai.create(essai);
    }
}
