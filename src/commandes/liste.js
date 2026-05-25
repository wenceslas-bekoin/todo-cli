// Importer le module chargerTaches depuis le fichier de stockage
import { chargerTaches }  from "../services/stockage.js";

// Fonction pour afficher la liste des tâches
export async function executerListe(){
    // Charger les tâches depuis le stockage
    const taches = await chargerTaches();

    // Vérifier si le tableau de tâches est vide
    if (taches.length === 0) {
        console.log("Aucune tâche trouvée.");
        return;
    }

    // Afficher les tâches
    console.log("\nListe des tâches:\n");
    taches.forEach((tache, index) => {
        // Afficher le statut de la tâche (complétée ou non)
        const statut = tache.complete ? "[x]" : "[ ]";

        // Afficher l'index, le statut et le texte de la tâche
        console.log(`${index + 1}. ${statut} ${tache.texte}`);
    });
}
