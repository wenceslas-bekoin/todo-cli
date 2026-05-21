//importer les modules
import { chargerTaches, sauvegarderTaches } from "../services/stockage.js";

//fonction pour ajouter une tâche
export async function ajouterTache(nouvelleTache){
    //charger les tâches existantes
    const taches = await chargerTaches();

    //ajouter la nouvelle tâche au tableau
    taches.push(nouvelleTache);

    //sauvegarder les tâches mises à jour
    await sauvegarderTaches(taches);

    console.log(`Tâche ajoutée: ${nouvelleTache}`);
    
}