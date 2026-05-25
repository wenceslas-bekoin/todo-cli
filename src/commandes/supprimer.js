// Importer les modules
import { chargerTaches, sauvegarderTaches } from "../services/stockage.js";

// Fonction pour supprimer une tâche
export async function supprimerTache(indexArgument){
    //  Convertir l'argument texte en vrai nombre entier
    const index = parseInt(indexArgument);

    // Charger les tâches existantes
    const taches = await chargerTaches();

    // Vérifier si l'index est valide
    if (isNaN(index) || index < 1 || index > taches.length) {
        console.log("Index invalide.");
        return;
    }

    // Supprimer la tâche du tableau 
    const [tacheSupprimee] = taches.splice(index - 1, 1);

    // Sauvegarder les tâches mises à jour
    await sauvegarderTaches(taches);
    
    // Message de confirmation (on va chercher la propriété .texte de l'objet)
    console.log(`Tâche supprimée : "${tacheSupprimee.texte}"`);
}
