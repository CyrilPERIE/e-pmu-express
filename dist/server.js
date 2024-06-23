import "dotenv/config";
import cors from "cors";
import express from "express";
import { defineRelationBetweenObjects } from "./models/_sync.js";
import { ProgrammeController } from "./controllers/Programme.js";
import { ParticipantController } from "./controllers/Participant.js";
import { PariController } from "./controllers/Pari.js";
import { UserController } from "./controllers/User.js";
import './scraper/scheduler.js';
import path from 'path';
const app = express();
const PORT = process.env.PORT || 8081;
//Limit volontairement grande pour pouvoir faire passer des fichiers de tailles plus grands que 1048576 (cf. https://stackoverflow.com/questions/19917401/error-request-entity-too-large)
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
(() => {
    try {
        defineRelationBetweenObjects();
        app.listen(PORT, () => {
            console.log(`running at port ${PORT}`);
        });
    }
    catch (error) {
        console.log("Erreur lors de la création des tables", error);
    }
})();
app.route("/programme")
    .post(ProgrammeController.post);
app.route("/programme/dates")
    .get(ProgrammeController.getAllDates);
app.route("/programme/:datePMU/reunions")
    .get(ProgrammeController.getReunionByDate);
app.route("/programme/:reunion_id/courses")
    .get(ProgrammeController.getCoursesByReunionId);
app.route("/programme/:datePMU/R:reunion/C:course/id")
    .get(ProgrammeController.getCourseId);
app.route("/programme/:datePMU/R:reunion/C:course")
    .post(ParticipantController.postParticipant);
app.route("/programme/:course_id/participants")
    .get(ParticipantController.getParticipants);
app.route("/programme/:datePMU/R:reunion/C:course/pari")
    .post(PariController.postPari);
app.route("/datasets/:ep_utilite")
    .get(ProgrammeController.getDataset);
app.route("/auth/login")
    .post(UserController.login);
app.route("/auth/register")
    .post(UserController.register);
app.get('/', (req, res) => {
    res.send('up!');
});
app.get('/sendFile', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
