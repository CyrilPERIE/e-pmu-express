import axios from "axios";
import { DatePMU } from "../util/class/datePMU.js";
import { BASE_API_URL, BASE_PMU_URL } from "../constants.js";
import { Programme } from "../../common/models/programme.js";
import { RapportDefinitif } from "../../common/models/rapportsDefinitifs.js";

/**
 * Récupère le programme d'une date spécifique, la récupération du programme est utile pour:
 * - Récupérer les différentes réunions
 * - Récupérer la météo des réunions
 * - Récupérer les différentes courses
 * - Récupérer les participants des différentes courses
 * 
 * @param {DatePMU} datePMU par défaut, date de la veille
 * @returns {Promise<void>}
 */
export async function scrapCotesDefinitives(datePMU: DatePMU = new DatePMU(new Date(new Date().setDate(new Date().getDate() - 1)))): Promise<void> {
  let url = `${BASE_PMU_URL}/${datePMU.datePMU}`
  await axios.get(url)
  .then(async response => {
    const programme: Programme = response.data.programme;
    for(let reunion of programme.reunions) {
      for(let course of reunion.courses) {
            const url_cotes = `${BASE_PMU_URL}/${datePMU.datePMU}/R${reunion.numOfficiel}/C${course.numExterne}/rapports-definitifs?specialisation=INTERNET&combinaisonEnTableau=true`
            await axios.get(url_cotes)
            .then(response => {
                const rapportDefinitif: RapportDefinitif[] = response.data
                for(let rapport of rapportDefinitif) {
                  axios.post(`${BASE_API_URL}/programme/${datePMU.datePMU}/R${reunion.numOfficiel}/C${course.numExterne}/pari`, {
                      ...rapport
                  })
                }
            })
            .catch(error => {
                console.error(` > Impossible de récupérer les côtes sur l'url "${error.input}".`);
                console.error(error.stack);
            })
        }
    }
    //TODO: Update la table datePMU.isCotesScraped = true
  })
  .catch(error => {
    console.error(` > Impossible de récupérer le programme sur l'url "${error.input}".`);
    console.error(error.stack)
  });
}

