// Fonction pour afficher l'aide
export function afficherAide(){
    console.log(`
        --------- Gestionnaire de Tâches - Aide ---------
        
        Usage: npm run todo -- [commande] [argument]

        Commandes disponibles :

        - ajouter [texte]   : Ajouter une nouvelle tâche 
                              (ex: npm run todo -- ajouter Apprendre JavaScript)

        - liste             : Afficher la liste de vos tâches
                              (ex: npm run todo -- liste)

        - complete [numéro] : Marquer une tâche comme terminée 
                              (ex: npm run todo -- complete 1)

        - supprimer [numéro]: Supprimer une tâche définitivement 
                              (ex: npm run todo -- supprimer 1)
        
        - aide              : Afficher ce menu d'aide
                              (ex: npm run todo -- aide)`);
}
