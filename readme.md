# 🏦 Tirelire – API d'épargne collective et solidaire

**👤 Assigné:** Zakaria Ziane  
**📅 Créé :** 05/10/25

## 📋 Description du projet

Tirelire est une API backend sécurisée qui permet de gérer une tontine (Daret) numérique : un groupe de personnes met en commun une somme fixe chaque mois, et à tour de rôle, chaque membre reçoit la cagnotte.

## 🎯 Contexte du projet

L'API gère l'inscription des utilisateurs, la création de groupes, les tours de contribution, la distribution des fonds et le suivi des paiements, elle intègre aussi un score de fiabilité interne qui valorise la régularité et la ponctualité des membres, influençant leur ordre de passage ou l'accès à d'autres groupes.

Ce brief vous a été assigné.  
Lisez attentivement votre brief avant de débuter votre travail !

### 👨‍💻 Assignation individuelle
Vous travaillez individuellement sur ce brief.

### 💼 Situation professionnelle
Développement d'APIs REST sécurisés avec Node.js & Express

## ⚠️ Besoin visé ou problème rencontré

Mise en place d'une application web de gestion de données, incluant des fonctionnalités de création, consultation, modification et suppression avec authentification et gestion des accès. Le problème rencontré est l'absence d'un système fiable et sécurisé pour : 
- 🗄️ Gérer les données côté serveur. 
- 🔄 Assurer la communication entre le front-end et le back-end via des APIs REST. 
- 🔐 Garantir la sécurité des données (authentification, autorisation). 
- 🚀 Déployer une solution stable et maintenable.

## 🎓 Compétences visées

- **C1.** 📋 Planifier le travail à effectuer individuellement: niveau 2, adapter
- **C2.** 👥 Contribuer au pilotage de l'organisation du travail individuel et collectif: niveau 2, adapter
- **C3.** 🔍 Définir le périmètre d'un problème rencontré en adoptant une démarche inductive: niveau 1, imiter
- **C4.** 💡 Rechercher de façon méthodique une ou des solutions au problème rencontré: niveau 1, imiter
- **C5.** ⚙️ Installer et configurer son environnement de travail en fonction du projet: niveau 2, adapter
- **C6.** 🧩 Développer des composants métier: niveau 2, adapter
- **C7.** 📊 Contribuer à la gestion d'un projet: niveau 2, adapter
- **C8.** 🏗️ Définir l'architecture logicielle d'une application: niveau 2, adapter
- **C9.** 💾 Développer des composants d'accès aux données: niveau 2, adapter
- **C10.** 🧪 Préparer et exécuter les plans de tests: niveau 1, imiter
- **C11.** 🚀 Contribuer à la mise en production dans une démarche DevOps: niveau 1, imiter

## ⚡ Fonctionnalités principales de l'API

- 👤 Inscription des utilisateurs.
- 👥 Création et gestion de groupes.
- 🔄 Organisation des tours de contribution et distribution des fonds.
- 📊 Suivi des paiements et historique accessible à tout le groupe.
- 🔔 Notifications/rappels automatiques pour réduire les oublis.
- ⭐ Score de fiabilité interne, valorisant la régularité et la ponctualité des membres, influençant leur ordre de passage ou leur accès à d'autres groupes.
- 💰 Gestion transparente des contributions et des bénéficiaires.

## 🔒 Sécurité et conformité

### 🆔 Mise en place d'un système KYC personnalisé et robuste

- 📝 Vérification des données saisies par l'utilisateur (nom, prénom, numéro de carte nationale).
- 📷 Téléversement et validation de l'image de la carte nationale.
- 👁️ Vérification faciale : comparaison entre la photo de la carte et une photo/vidéo en temps réel de l'utilisateur (Préparer uniquement la logique à intégrer par la suite).
- 🔐 Les images doivent être chiffrées localement ou stockées via un service tiers garantissant la sécurité des données.

Cette vérification peut être :
- 🤖 Automatique via une bibliothèque telle que face-api ou un modèle LLM spécialisé.
- 👨‍💼 Manuelle par un administrateur si nécessaire.

Aucune action sensible (création de groupe, contribution, virement) ne doit être autorisée sans vérification préalable.

### 🔑 Authentification
Authentification basée sur JWT avec gestion des rôles (Particulier, Admin).

## 👥 Gestion des groupes

Les membres doivent se mettre d'accord sur les délais et montants des virements.

### 👤 Tout particulier peut :
- ➕ Créer un groupe.
- 🎯 Lancer et gérer les règlements de son groupe.
- 🎫 Ouvrir un ticket en cas de problème et le transmettre aux administrateurs.

### 👨‍💼 L'administrateur dispose d'un accès total :
- 👀 Supervision de l'ensemble des groupes.
- 💬 Communication directe avec les particuliers.

## 💬 Communication et traçabilité

- 💬 Le groupe peut échanger des messages texte et audio.
- 📋 Chaque opération financière (ex : virement) doit être tracée et sauvegardée afin de permettre une résolution rapide en cas de litige ou de problème.

## 📚 Modalités pédagogiques

Travail individuel.

**⏰ Date Limite:** 17/10/2025 à minuit.

## 📝 Modalités d'évaluation

Une durée de 25 min organisée comme suit :
- **⏱️ 5 minutes** pour Démontrer le contenu et la fonctionnalité (très rapidement)
- 💻 Montrez le code source et expliquez brièvement comment il fonctionne. (5 minutes)
- **🎯 Mise en situation** (10 minutes)
- **🔍 Code Review \ Questions culture Web** (5 minutes)

## 📦 Livrables

- **💻 Code Source :** Lien GitHub de l'application
- **📋 Planification :** Lien de la planification JIRA
- **📖 Documentation Technique :** Description de l'application dans un fichier README
- **📊 Rapport de coverage :** Plus de 80%

## ✅ Critères de performance

- 🏗️ Implémentation en utilisant l'OOP afin de garantir une extensibilité optimale de la solution.
- 🌐 Utilisation du module HTTP recommandée (Express peut également être utilisé).
- 🍃 Base de données : MongoDB (Utilisant ODM mongoose ou autre).
- 📋 Planification sur JIRA : inclure l'utilisation des epics, user stories / tasks et sub-tasks, relier JIRA avec GitHub et mettre en place des règles d'automatisation.
- 🔐 Authentification : sécuriser les données avec JWT, avec un middleware correctement implémenté.
- ⚠️ Gestion des exceptions et des erreurs.
- ✅ Validation des données côté backend.
- 🏗️ Architecture n-tiers structurée.
- 📝 Respect des conventions de nommage.
- 🧪 Tests des services avec Jest.
- 🐳 Dockerisation du projet