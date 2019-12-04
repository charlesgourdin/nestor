### Test technique 'Chez Nestor'.

## https://hardcore-haibt-83e030.netlify.com

Réalisé en React.js

-----------------------------------------------------------------------------------------
### Chez Nestor - Test Technique

-----

Le but de l'exercice est de créer les 3 pages suivantes pour le backoffice de Chez Nestor :

- 🏠 Une liste de chambres
- 🛏️ Une page de détails de chambre
- 👤 Une page de détails de client

Une petite API te permet de récupérer les différentes données :

```
GET https://technical-test-api.herokuapp.com/rooms -> Données de toutes les chambres
GET https://technical-test-api.herokuapp.com/rooms/:id -> Données d'une chambre
GET https://technical-test-api.herokuapp.com/clients -> Données de tous les clients
GET https://technical-test-api.herokuapp.com/clients/:id -> Données d'un client
```

Une chambre est représentée par les champs suivants :
- `id` : String, UUID unique ;
- `name` : String, nom et numéro de la chambre ;
- `address` : String, addresse (numéro + rue) ;
- `zip` : String, code postal ;
- `city` : String, ville ;
- `status` : String, indique si la chambre est disponible ou non (`available`, `occupied`) ;

Un client est représenté par les champs suivants :
- `id` : String, UUID unique ;
- `name` : String, prénom et nom ;
- `roomId` : String, UUID de la chambre ;
- `email` : String, adresse email ;
- `phone` : String, numéro de téléphone ;
- `birthDate` : String, date de naissance ;
- `nationality` : String, nationalité ;
- `status` : String, indique si le client a réservé mais n'est pas encore dans sa chambre (`booked`), s'il a fait son état des lieux d'entrée (`checked-in`) ou s'il a quitté sa chambre (`checked-out`).

**Technologie** : le langage, le framework et plus généralement les outils sont libres, utilisez ce que vous connaissez le mieux ! :)

Le sujet est volontairement extrêmement large.

Quelques pistes de choses qui nous intéressent :

- ✨ Propreté de code : découpage, gestion d'erreurs, nommage des variables / fonctions, etc.
- 📚 Utilisation de librairies / frameworks
- 🎨 Réflexion UI / UX
- ⚙️ Tests
- ☁️ Déploiement sur un hébergeur (Netlify, Heroku ou autre)
- 📦 Consommation d'API

Si tu penses que tu as fait quelque chose qui mérite notre attention, n'hésite pas à nous le signaler ! :) 
