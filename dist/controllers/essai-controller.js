import { mapEssai } from "../mappers/essai-mapper";
import { EssaiService } from "../services/essai-service";
export default class EssaiController {
    static async delete(req, res) {
        return await EssaiService.delete(Number(req.body.id_essai)).then(() => res.send("Success!")).catch((err) => err);
    }
    static async get(req, res) {
        return await EssaiService.get().then(() => res.send("Success!")).catch((err) => err);
    }
    static async getById(req, res) {
        return await EssaiService.getById(Number(req.params.id)).then((result) => res.send(result)).catch((err) => err);
    }
    static async patch(req, res) {
        return await EssaiService.patch(mapEssai(req.body)).then(() => res.send("Success!")).catch((err) => err);
    }
    static async post(req, res) {
        await EssaiService.post(mapEssai(req.body)).then(() => res.send("Success!")).catch((err) => err);
    }
}
