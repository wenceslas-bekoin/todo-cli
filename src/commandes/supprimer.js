//importer les modules
import { chargerTaches, sauvegarderTaches } from "../services/stockage.js";

//fonction pour supprimer une tâche
export async function supprimerTache(index){
    //charger les tâches existantes
    const taches = await chargerTaches();

    //vérifier 
    if(index  < 1 || index > taches.length){
        console.log("Index invalide.");
        return;
    }
     //supprimer la tâche du tableau
     const tacheSupprimee = taches.splice(index - 1, 1);

     //sauvegarder les tâches mises à jour
     await sauvegarderTaches(taches);
     
     //message de confirmation
     console.log(`Tâche supprimée: ${tacheSupprimee}`);
}