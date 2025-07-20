# Trouve Ton Artisan - API REST (Node.js + Express)

API RESTful pour la gestion des artisans, développée avec Node.js, Express, MongoDB et documentée avec Swagger.

## 📦 Technologies utilisées

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB / Mongoose](https://mongoosejs.com/)
- [Swagger](https://swagger.io/) (via swagger-autogen)
- [EJS](https://ejs.co/) pour le rendu côté serveur
- [CORS, JWT, bcrypt] pour la sécurité et la gestion utilisateur

---

## ⚙️ Prérequis

- Node.js (v16+)
- MongoDB (en local ou distant)
- `env-cmd` pour la gestion des fichiers `.env` (déjà inclus)

---

## 🚀 Installation

### 1. Cloner le dépôt

```bash
git clone https://github.com/votre-utilisateur/trouve-ton-artisan-api.git
cd trouve-ton-artisan-api
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configuration des variables d'environnement

Crée un dossier `env/` contenant au moins un fichier `.env` ou `.env.dev`. Exemple (`env/.env`):

```
PORT=3000
DB_URL=mongodb://localhost:27017/trouve-ton-artisan
SECRET_KEY=votre_clé_jwt
```

---

## ▶️ Lancer le projet

### En mode développement

```bash
npm run dev
```

### En mode production

```bash
npm run prod
```

### Générer la documentation Swagger

```bash
npm run swagger-autogen
```

Puis accéder à la documentation via : [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

---

## 📁 Structure du projet

```
.
├── routes/               # Définition des routes Express
├── services/             # Logique métier
├── models/               # Schémas Mongoose
├── views/                # Templates EJS
├── db/mongo.js           # Connexion MongoDB
├── swagger.js            # Fichier de génération Swagger
├── swagger_output.json   # JSON généré pour Swagger UI
├── app.js                # Configuration Express
├── bin/www               # Point d’entrée serveur
├── env/                  # Variables d’environnement
```

---

## 🔐 Authentification

Utilise les tokens JWT avec les en-têtes suivants :
- `Authorization: Bearer <token>`

---

## 🧪 Endpoints principaux (voir Swagger)

| Méthode | URL                     | Description                         |
|--------|--------------------------|-------------------------------------|
| GET    | `/artisans`             | Liste des artisans                  |
| POST   | `/artisans`             | Création d’un artisan               |
| GET    | `/artisans/:id`         | Récupération d’un artisan           |
| PUT    | `/artisans/:id`         | Mise à jour complète                |
| DELETE | `/artisans/:id`         | Suppression                         |
| POST   | `/users/authenticate`   | Connexion                           |
| POST   | `/users/add`            | Création d’un utilisateur           |
| GET    | `/api-docs`             | Documentation Swagger               |

---

## 📝 Licence

Ce projet est sous licence MIT.
