import axios from "axios";
import { DatePMU } from "../util/class/datePMU.js";
import { BASE_API_URL, BASE_PMU_URL } from "../constants.js";
import { Reunion } from "../../common/models/reunion.js";
import { Course } from "../../common/models/course.js";
import { Participant } from "../../common/models/participant.js";

/**
 * Récupère les participants d'une course spécifique
 * 
 * @param {DatePMU} datePMU 
 * @param {Reunion} reunion 
 * @param {Course} course 
 * @returns {Promise<void>}
 */
export async function scrapParticipants(datePMU: DatePMU, reunion: Reunion, course: Course): Promise<void> {
  let url = `${BASE_PMU_URL}/${datePMU.datePMU}/R${reunion.numOfficiel}/C${course.numExterne}/participants?specialisation=INTERNET`
  await axios.get(url)
  .then(response => {
    const participants: Participant[] = response.data.participants;
    for(let participant of participants) {
      axios.post(`${BASE_API_URL}/programme/${datePMU.datePMU}/R${reunion.numOfficiel}/C${course.numExterne}`, {
          ...participant
      })
      .then((response) => {
        // console.log(response.status)
      })
      .catch((err) => {
        console.log(err);
      });
    }
  })
  .catch(error => {
    console.error(` > Impossible de récupérer les participants sur l'url "${error.input}".`);
    console.error(error.stack)
  });
}

