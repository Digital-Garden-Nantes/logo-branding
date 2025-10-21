# logo-branding

**Un module JavaScript qui ajoute une popup "clic droit" sur votre logo pour faciliter le téléchargement des assets de marque (PNG/SVG), l’accès rapide aux guidelines et l’ouverture du lien dans un nouvel onglet. Parfait pour fluidifier la diffusion d'une identité visuelle.**

## ✨ Fonctionnalités

- Clic droit sur le logo = affichage d’une popup contextuelle
- Téléchargement direct de l’icône (SVG/PNG) ou du logo complet (SVG/PNG)
- Lien vers les guidelines de marque
- Ouverture du logo dans un nouvel onglet
- Aucune dépendance, compatible avec tous les frameworks et CMS
- Responsif, customisable via variables CSS

## ⚡ Installation

**Via npm**
```bash
npm install @digital-garden-nantes/logo-branding
```
Et importe le JS et le CSS :
```js
import '@digital-garden-nantes/logo-branding/dist/logo-branding.min.js';
import '@digital-garden-nantes/logo-branding/dist/logo-branding.min.css';
```
**Via CDN**
```html
<script src="https://cdn-01.digitalgarden.fr/logo-branding/logo-branding@latest/dist/logo-branding.min.js"></script>
<link rel="stylesheet" href="https://cdn-01.digitalgarden.fr/logo-branding/logo-branding@latest/dist/logo-branding.min.css">
```

## 🚀 Utilisation

Ajoute simplement les attributs au lien de ton logo :

```html
<a
    logo-branding
    lb-icon-svg="url-icon.svg"
    lb-icon-png="url-icon.png"
    lb-logo-svg="url-logo.svg"
    lb-logo-png="url-logo.png"
    lb-guidelines="url-guidelines"
    href="/"
>
    <img src="logo.png" alt="Logo">
</a>
```

**Les liens spécifiques dans la popup n’apparaissent que si l’attribut correspondant est renseigné.**

## 🎨 Personnalisation

Le style est conçu pour être facilement modifiable :
- Toutes les couleurs et polices passent par des CSS Custom Properties (variables)
- Adaptation automatique sur mobile (popup en bas)
- Tu peux override le CSS dans ton projet si besoin

```css
.lb-popup {
    --border-color: #ddd;
    --background-color: #fff;
    --font-color: #000;
}
```
