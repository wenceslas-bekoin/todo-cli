// Import du fichier de configuration env.js
import "./config/env.js";

// Importer les commandes
import { ajouterTache } from "./commandes/ajouter.js";
import { completerTache } from "./commandes/complete.js";
import { executerListe } from "./commandes/liste.js";
import { supprimerTache } from "./commandes/supprimer.js";

// Importer les aides
import { afficherAide } from "./utilitaires/aides.js";

// 1. Récupérer la commande (ex: "ajouter", "liste")
const commande = process.argv[2];

// 2. Récupérer TOUS les mots saisis après la commande sous forme de tableau
const tableauDesMots = process.argv.slice(3);

// 3. Préparer les arguments pour les différentes commandes
const texteArgument = tableauDesMots.join(' '); // Recolle TOUS les mots pour "ajouter"
const indexArgument = tableauDesMots[0];        // Prend le premier élément (le numéro) pour complete/supprimer

// Fonction main pour exécuter les commandes
async function main(){
    switch(commande){
        case 'liste':
            await executerListe();
            break;
            
        case 'ajouter':
            if (!texteArgument) { 
                console.log(" Fournissez une tâche à ajouter.");
                return;
            }
            await ajouterTache(texteArgument);
            break;
            
        case 'complete': 
            await completerTache(indexArgument); // La variable indexArgument 
            break;
            
        case 'supprimer':
            await supprimerTache(indexArgument); // La variable indexArgument
            break;
            
        case 'aide':
        case undefined: // Si l'utilisateur tape "node src/index.js" sans aucune commande
            afficherAide();
            break;
            
        default:
            console.log(` Commande inconnue: "${commande}"`);
            afficherAide();
            break;
    }
}

// Exécuter la fonction main
main();
