# Application de gestion de contacts


## Installation

- Cloner le projet où bon vous semble à partir de git et installer les dépendances:
```
git clone https://github.com/zabbra/gestion_contact.git
cd gestion_contat
npm install | npm i


```
- Pour lancer l'application, lancer la commande suivante:
```
npm run dev | npm run start
```

## Fonctionement 
1. `Faire passer le DataGrid en lecture seule. Pour ajouter un nouveau contact,il faudra:`
	+ cliquer sur Ajouter
	+ Une nouvelle fenêtre modale s'affiche
	+ Les informations sont rentrées dans cette fenêtre modale
	+ Lorsqu'on sauvegarder , une ligne est  rajouter sur le tableau

2. `La meme fenêtre modale sera utilisee pour l'ajout ou l'édition d'un contact`

## Régles de gestion

1. `Régles de validation dans la modale d'ajout/édition`
	+ Le nom doit avoir au moins 3 caractère après avoir été **trim()**
	+ Le prenom doit avoir au moins 3 caractère après avoir été **trim()**
	+ L'email doit être valide 
	+ Le nom du contact doit être unique dans le tableau de la liste des contacts.
	+ La date de naissance est obligatiore.
	+ La date de deces est optionnelle mais si elle est renseignée,elle doit


3. `La meme fenêtre modale sera utilisee pour l'ajout ou l'édition d'un contact`

Une nouvelle fenêtre modale s'affiche
Les informations sont rentrées dans cette fenêtre modale
Lorsqu'on sauvegarder , une ligne est  rajouter sur le tableau






