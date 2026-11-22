# AI_LOG.md : journal d'usage de l'IA

> À placer à la racine du dépôt. À remplir **au fil de l'eau**, pas en fin de projet. Une entrée par tâche (pas par message), en 5 lignes.
> Rappel : l'IA est autorisée pour le **code de production** et la **configuration d'outils** uniquement. Qui a fait la demande, les fichiers touchés et les commits se retrouvent dans l'historique Git : ne les recopiez pas.

## Outils utilisés (à remplir une fois)

| Outil | Modèle (si connu) | Mode (autocomplétion, chat, agent) |
|---|---|---|
| AI | Copilot | Chat | Claude |

Fichier d'instructions pour agent versionné (`CLAUDE.md`, `AGENTS.md`...) : <non>

## Entrées

### 2026-11-06 : Charger le backlog (US-01)

- **Demande (résumé fidèle)** : Génération d’un fichier en  qui permet à l’utilisateur de sélectionner le nombre de joueur dans la partie de poker 
- **Résultat** : modifié
- **Ce que nous avons vérifié** : Essai manuel (par nous et d’autres personnes) de la fonctionnalité de choix du nombre de joueurs.
- **Ce que nous avons changé ou rejeté, et pourquoi** : Le contenu du fichier n’était pas en lien avec le contexte du projet, il a donc fallu modifier le code de certaines parties.

### 2026-11-15 : Voter secrètement (US-04)

- **Demande (résumé fidèle)** : Génération de scripts et modifications React qui permettent aux joueurs de voter chacun leur tour secrètement 
- **Résultat** : accepté tel quel
- **Ce que nous avons vérifié** : Essais manuels avec 2,3 puis 4 joueurs : chaque joueur peut voter secretement (le vote n'est pas affiché) avant de passer au joueur suivant
- **Ce que nous avons changé ou rejeté, et pourquoi** :  rien modifié

### 2026-11-15 : Réveler les votes des joueurs (US-05)

- **Demande (résumé fidèle)** : Modification du fichier Vote.tsx pour display/afficher les votes des joueurs à la fin des votes
- **Ce que nous avons vérifié** : Essais manuels 
- **Ce que nous avons changé ou rejeté, et pourquoi** :  Rien de modifié car les modifications correspondent aux demandes

### 2026-11-21 : Créer un CI pour github (CI)

- **Demande (résumé fidèle)** : Génération d’un fichier CI qui permet d'avoir un workflows sur github
- **Résultat** : modifié
- **Ce que nous avons vérifié** : Essai manuel du bon fonctionnement sur Actions dans github.
- **Ce que nous avons changé ou rejeté, et pourquoi** : Modification du fichier pour qu'il fonctionne dans le context de Vite et React

### 2026-11-21 : Règles du planning poker

- **Demande (résumé fidèle)** : Créer des fonctions correspondants aux règles du planning poker à partir de nos pseudos code
- **Résultat** : modifié
- **Ce que nous avons vérifié** : Essai manuel du bon fonctionnement, tests avec le CI
- **Ce que nous avons changé ou rejeté, et pourquoi** : Modifications du fichier généré :
    * rejet de la fonction mediane car elle ne correspondait pas aux attentes de la regle (il fallait qu'enn cas de nombre de vote pair, la moyenne soit arrondi a la carte vote la plus proche, et non à l'entier superieur) 
    *  nous avons changé l'architecture du fichier géneré pour le separer en 2 : rules.ts et rulesFunctions pour la propreté 


### AAAA-MM-JJ : ...

## Bilan (à compléter en séance 4, 3 lignes)

- Nombre d'entrées et de propositions rejetées ou corrigées :
- Tâches où l'IA a fait gagner du temps :
- Tâches où l'IA a fait perdre du temps :
