//importation de module fs pour la gestion de fichiers
import fs from "node:fs/promises";

//recuperer le chemin du fichier depuis .env
const fichier = process.env.FICHIER_TACHES;

//Définir le chemin absolue du fichier de stockage
const FILE_PATH = new URL(fichier, import.meta.url);

//fonction pour charger les tâches
export async function chargerTaches(){
    try{
        const data = await fs.readFile(FILE_PATH, "utf-8");
        //transformer les données en objet JavaScript
        const taches = JSON.parse(data);
        //retourner le tableau de tâches
        return taches;
    }catch(error){
        //si le fichier n'existe pas, retourner un tableau vide
        if(error.code === "ENOENT"){
            return [];
        }
        console.error("Erreur avec le fichier de stockage:", error.message);
        throw error;
    }
}

//fonction pour sauvegarder les tâches
export async function sauvegarderTaches(taches) {
    try{
        //transformer le tableau de tâches en chaîne JSON
        const tachesJSON = JSON.stringify(taches, null, 2);

        //écrire dans le fichier de stockage
        await fs.writeFile(FILE_PATH, tachesJSON, "utf-8");
        
        console.log("Tâches sauvegrdées avec succès.");
    }catch(error){
        console.error("Erreur lors de l'écriture du fichier de stockage:", error.message);
        throw error;
    }
    
}