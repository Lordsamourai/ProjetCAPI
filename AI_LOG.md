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


### AAAA-MM-JJ : ...

## Bilan (à compléter en séance 4, 3 lignes)

- Nombre d'entrées et de propositions rejetées ou corrigées :
- Tâches où l'IA a fait gagner du temps :
- Tâches où l'IA a fait perdre du temps :
