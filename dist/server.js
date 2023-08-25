import "dotenv/config";
import EssaiController from "./controllers/essai-controller";
import express from "express";
const app = express();
const PORT = process.env.PORT || 8081;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.route("/essai")
    .get(EssaiController.get)
    .post(EssaiController.post)
    .patch(EssaiController.patch)
    .delete(EssaiController.delete);
app.route("/essai/:id")
    .get(EssaiController.getById);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
