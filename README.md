Javascript-Oriente-Objet
======================
W@C Workshop la POO en Javascript

Ce workshop a pour but de vous faire utiliser la programmation orienté objet via 3 exercices.

## **Table of contents**
  - [Exercice 1 : phrase vers tableau de caractère](#exercice-1--phrase-vers-tableau-de-caractère)

> 

## **Exercice 1 : Création de la classe**
- **Fichier** : user.js

Vous devez créer une classe ayant pour nom 'User' ainsi que son constructeur.

Ce-dernier devras avoir 5 arguments "id", "login", "email", "password" et "isAdmin". Chacun de ces arguments vas être assigné à une propriété (une variable de la classe) du même nom.

```shell
> node main.js ex1
User {
  id: 0,
  login: 'Darius',
  email: 'darius1.morel@epitech.eu',
  password: 'vouav',
  isAdmin: true
}
```

## **Exercice 2 : Ajouter une méthode**
- **Fichier** : user.js

Vous devez créer une méthode *dump* pour la classe User

Ce-dernier devras afficher toutes les propriétés de la classe.

```shell
> node main.js ex2
0 Darius darius1.morel@epitech.eu vouav true
```

## **Exercice 3 : Encapsuler la logique**
- **Fichier** : user.js

Vous devez créer une méthode pour chaque route de l'API (hors getUsers)


```shell
> node main.js ex3
{
  id: 124,
  login: 'login',
  email: 'mail@epitech.eu',
  password: 'password',
  isAdmin: true
}
{
  id: 124,
  login: 'ENFAITNON',
  email: 'mail@epitech.eu',
  password: 'pastouche',
  isAdmin: false,
  mail: 'ptdr@fun.com'
}
null
```
