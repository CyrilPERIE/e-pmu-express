import axios from 'axios';
import { DatePMU } from '../util/class/datePMU.js';
import { scrapParticipants } from './scrapParticipants.js';
import { oneOf } from '../util/utils.js';
import { BASE_API_URL, BASE_PMU_URL } from '../constants.js';
import { Programme } from '../../common/models/programme.js';
import { Utilite } from '../../common/enums/ep_utilite.js';


/**
 * Récupère le programme d'une date spécifique, la récupération du programme est utile pour:
 * - Récupérer les différentes réunions
 * - Récupérer la météo des réunions
 * - Récupérer les différentes courses
 * - Récupérer les participants des différentes courses
 * 
 * @param {DatePMU} datePMU par défaut, date du jour
 * @returns {Promise<void>}
 */
export async function scrapProgramme(datePMU: DatePMU = new DatePMU(new Date())): Promise<void> {
  //TODO: Insertion de la datePMU dans BDD datePMU.isScraped = false datePMU.isCotesScrapes = false
  let url = `${BASE_PMU_URL}/${datePMU.datePMU}`
  await axios.get(url)
  .then(async response => {
    const programme: Programme = response.data.programme;
    programme.ep_utilite = oneOf(Object.values(Utilite))
    //TODO: Update la table datePMU.isScraped = true
    axios.post(`${BASE_API_URL}/programme`, {
        datePMU: datePMU.datePMU,
        ...programme
    })
    .then((response) => {
      // console.log(response.status)
    })
    .catch((err) => {
      console.log(err);
    });

    for(let reunion of programme.reunions) {
      for(let course of reunion.courses) {
        await scrapParticipants(datePMU, reunion, course)
      }
    }
    //TODO: Update la table datePMU.isScraped = true
  })
  .catch(error => {
    console.error(error.stack)
  });
}

