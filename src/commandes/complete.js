// Importer les modules
import { chargerTaches, sauvegarderTaches } from "../services/stockage.js";

// Fonction pour compléter une tâche
export async function completerTache(indexArgument){
    //  Convertir le texte du terminal en un vrai nombre entier
    const index = parseInt(indexArgument);

    // Charger les tâches existantes
    const taches = await chargerTaches();

    //  Vérifier si l'index est un nombre ET s'il correspond à une tâche existante
    if (isNaN(index) || index < 1 || index > taches.length) {
        // Si l'index est invalide, afficher un message d'erreur.
        console.log("Index invalide. Veuillez entrer un numéro de tâche valide.");
        return;
    }

    // Modifier la tâche correspondante pour la marquer comme complétée
    taches[index - 1].complete = true;

    // Sauvegarder les tâches mises à jour
    await sauvegarderTaches(taches);

    // Message de confirmation 
    console.log(`Tâche complétée : "${taches[index - 1].texte}"`);
}
