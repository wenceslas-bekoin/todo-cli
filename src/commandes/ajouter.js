import { chargerTaches, sauvegarderTaches } from "../services/stockage.js";

// Fonction pour ajouter une tâche
export async function ajouterTache(texteTache) {
    // 1. Sécurité : vérifier que l'utilisateur n'a pas envoyé du vide
    if (!texteTache || texteTache.trim() === "") {
        console.log("Erreur : Le texte de la tâche ne peut pas être vide.");
        return;
    }

    // Charger les tâches existantes
    const taches = await chargerTaches();

    // 2. Transformer le texte en un OBJET structuré
    const nouvelleTache = {
        texte: texteTache.trim(),
        complete: false // Faux par défaut car elle vient d'être créée
    };

    // Ajouter l'objet tâche au tableau
    taches.push(nouvelleTache);

    // Sauvegarder les tâches mises à jour
    await sauvegarderTaches(taches);

    // Afficher uniquement le texte dans la console
    console.log(`Tâche ajoutée : ${texteTache.trim()}`);
}
