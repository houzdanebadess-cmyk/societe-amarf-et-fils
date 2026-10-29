# Héberger le site Société AMARF ET FILS soi-même

Ce site est construit avec **TanStack Start** (React + Vite). Il contient une partie serveur
(rendu côté serveur), donc il lui faut un hébergeur capable de faire tourner un serveur Node.js —
pas seulement un hébergeur de fichiers statiques.

## 1. Prérequis

- Node.js **22** (https://nodejs.org)
- Un compte sur un hébergeur, ou votre propre serveur (VPS)

## 2. Tester sur votre ordinateur

```bash
npm install
npm run dev
```

Ouvrez http://localhost:8080 — le site doit s'afficher.

## 3. Héberger sur une plateforme (Vercel, Netlify, Cloudflare Pages) — le plus simple

1. Créez un dépôt GitHub et poussez ce code dessus.
2. Sur la plateforme, importez le dépôt et configurez :
   - Commande de build : `npm run build`
   - Version de Node : 22
   - Dossier de sortie : `dist` (Netlify et Cloudflare Pages uniquement)
3. Déployez. Chaque mise à jour du dépôt redéploie le site automatiquement.

La plateforme détecte automatiquement le bon type de serveur grâce à Nitro (déjà configuré).

## 4. Héberger sur votre propre serveur (VPS, machine dédiée)

```bash
# Sur votre machine, construire avec le preset serveur Node.js :
NITRO_PRESET=node-server npm run build

# Copier tout le dossier .output/ sur le serveur, puis :
node .output/server/index.mjs
```

Le serveur écoute sur le port **3000** (modifiable avec les variables `PORT` et `HOST`).
Placez ensuite un reverse proxy (Nginx, Caddy) devant pour le HTTPS.
Attention : n'utilisez pas le fallback Nginx `try_files` vers index.html —
le serveur gère lui-même les routes.

## 5. Ce que ce code contient

- `src/routes/index.tsx` — la page d'accueil (produits, services, contact, WhatsApp)
- `src/styles.css` — les couleurs et styles du site
- `src/assets/` — le logo et la photo du héros
- `public/` — le favicon
- Le site n'utilise **aucune base de données ni clé secrète** : il n'y a rien à configurer.

## 6. Modifier les informations du site

Ouvrez `src/routes/index.tsx` : le numéro WhatsApp (`PHONE`, `WA`), l'adresse, les horaires,
les produits et les services sont listés en haut du fichier. Modifiez, redéployez, c'est tout.
