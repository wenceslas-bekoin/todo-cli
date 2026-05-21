//importer le modules chagerTaches depuis le fichier de stockage
import { chargerTaches }  from "../services/stockage.js";

//fonction pour afficher la liste des tâches
export async function executerListe(){
        //charger les taches depuis le stockage
        const taches = await chargerTaches();

//vérifier si le tableau de tâches est vide
        if(taches.length === 0){
            console.log("Aucune tâche trouvée.");
            //si aucune tâche  trouvée, retourner
            return;
        }

//afficher les tâches
console.log("\nListe des tâches:\n");
taches.forEach((tache, index ) =>{
    const statut = tache.terminee ? "[x]" : "[ ]";

    console.log(`${index + 1}. ${statut} ${tache.titre}`);
    });
}