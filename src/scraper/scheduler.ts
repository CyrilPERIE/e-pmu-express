import cron from 'node-cron';
import { scrapCotesDefinitives } from './scrapers/scrapCotesDefinitives.js';
import { scrapProgramme } from './scrapers/scrapProgramme.js';
import { DatePMU } from './util/class/datePMU.js';

//Chaque jour on veut récupérer les côtes définitives des courses de la veille
// Planifier la tâche pour s'exécuter tous les jours à 1h du matin
cron.schedule('0 1 * * *', async () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    await scrapCotesDefinitives(new DatePMU(yesterday))
  });
  
  // Chaque jour on veut récupérer le programme
  // Planifier la tâche pour s'exécuter tous les jours à deux heures du matin
  cron.schedule('0 2 * * *', async () => {
    await scrapProgramme(new DatePMU(new Date()))
  });
  