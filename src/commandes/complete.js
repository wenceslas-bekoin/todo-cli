//importer les modules
import { chargerTaches, sauvegarderTaches } from "../services/stockage.js";

//fonction pour compléter une tâche
export async function completerTache(index){
    //charger les fichiers existants
    const taches = await chargerTaches();

//vérifier l'index
if(index < 1 || index >  taches.length){

    //si l'index est invalide, afficher un message d'erreur.
    console.log("Index invalide.");
    //retourner.
    return;
}

//modifier la tâche
taches[index - 1].complete = true;
//sauvegarder les tâches mises à jour
await sauvegarderTaches(taches);

//message de confirmation
console.log(`Tâche complétée: ${taches[index - 1].titre}`);
}