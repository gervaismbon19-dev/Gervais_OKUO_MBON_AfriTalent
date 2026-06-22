# 🌍 AfriTalent

![AfriTalent Logo](./Image/logofo.png)

## 📌 Présentation du projet

**AfriTalent** est une plateforme de mise en relation entre **freelances tech** et **entreprises** en Afrique. Ce site vitrine a été développé dans le cadre d'un projet pédagogique visant à démontrer les compétences en développement web front-end.

Le site permet aux visiteurs de :
- Découvrir les freelances disponibles par catégorie
- Consulter les plans tarifaires
- En savoir plus sur la plateforme et son équipe
- Contacter l'équipe via un formulaire interactif

## Auteur

Information | Détai
**Nom** : OKOUO MBON
**Prénom** Gervais
**Classe** L1RT
**Année** 2025 - 2026 


## Technologies utilisées

Technologie  Version  Utilisation 

**HTML5**           Structure sémantique des pages 
**CSS3**            Mise en page, animations, responsive 
**Bootstrap 5**     5.3.8 Grille, navbar, carousel, accordion 
**JavaScript**      ES6 Dark mode, compteurs animés, filtrage, validation formulaire 
**Git & GitHub**    Versioning et déploiement 
**GitHub Pages**    Hébergement du site 

## 📁 Structure du projet'

OKOUO_MBON_GERVAIS-AfriTalent/
│
├── index.html # Page d'accueil
├── freelances.html # Catalogue des freelances
├── tarifs.html # Plans tarifaires + FAQ
├── about.html # À propos (histoire, équipe, valeurs)
├── contact.html # Formulaire de contact + carte
├── blog.html # Page blog (optionnelle)
├── inscription.html # Page inscription (optionnelle)
│
├── css/
│ └── style.css # Styles personnalisés
│
├── js/
│ └── main.js # Fonctions JavaScript
│
├── images/ # Images du site
│ ├── logo.png
│ ├── team1.jpg
│ └── ...
│
├── docs/
│ └── NOM_Prenom_Presentation.pptx
│
├── README.md # Ce fichier
└── .gitignore # Fichiers ignorés par Git

Page et Aperçu

[page1](./Image/page1.PNG)
[page2](./Image/page2.PNG)
[page3](./Image/page3.PNG)
[page4](./Image/page4.PNG)
[page5](./Image/page5.PNG)


---

## 🚀 Fonctionnalités implémentées

### ✅ HTML5
- Structure sémantique (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Accessibilité (attributs `alt`, `aria-label`, `role`)
- Formulaire de contact complet

### ✅ CSS3
- **Variables CSS** : 6+ variables personnalisées dans `:root`
- **Flexbox & Grid** : Mises en page modernes
- **Bento Grid** : Grille asymétrique pour la section "Comment ça marche"
- **Animations** : Transitions, fade-in au scroll, effets hover
- **Responsive design** : Mobile (375px), Tablette (768px), Desktop (1200px+)
- **Dark mode** : Thème clair/sombre avec persistance

### ✅ Bootstrap 5
- Navbar responsive avec menu hamburger
- Grille responsive (`col-12`, `col-md-6`, `col-lg-4`)
- Cards pour les freelances et tarifs
- Carousel pour les témoignages
- Accordion pour la FAQ

### ✅ JavaScript (Vanilla)
- **Dark mode** : Toggle + localStorage
- **Navbar dynamique** : Change d'apparence au scroll
- **Bouton retour en haut** : Apparaît après 300px de scroll
- **Compteurs animés** : IntersectionObserver + animation
- **Filtrage dynamique** : Filtrage des freelances par catégorie
- **Validation formulaire** : Regex email, message min 20 caractères
- **Animation fade-in** : Apparition progressive des éléments

---

## 📱 Responsive Design

| Appareil | Largeur | Comportement |
|----------|---------|--------------|
| **Mobile** | 375px | 1 colonne, menu hamburger |
| **Tablette** | 768px | 2 colonnes, navigation adaptée |
| **Desktop** | 1200px+ | 3-4 colonnes, navigation horizontale |

---

## 🎨 Palette de couleurs

| Rôle | Code HEX |
|------|----------|
| Primaire (orange) | `#ff7a00` |
| Primaire foncé | `#e06e00` |
| Primaire clair | `#fff0e6` |
| Secondaire (vert) | `#00c896` |
| Texte clair | `#212529` |
| Texte sombre (mode sombre) | `#e0e0e0` |
| Fond clair | `#faf9fb` |
| Fond sombre | `#121212` |

**Polices utilisées :**
- Titres : `'Plus Jakarta Sans', sans-serif`
- Corps : `'Inter', sans-serif`

---

## 🔧 Installation et exécution locale

# 1. Cloner le dépôt
git clone https://github.com/gervaismbon19-dev/Gervais_OKOUO_MBON-AfriTalent.git

# 2. Accéder au dossier
cd OKOUO_MBON-Gervais-AfriTalent

# 3. Ouvrir index.html dans votre navigateur
# Double-cliquez sur index.html ou utilisez un serveur local

