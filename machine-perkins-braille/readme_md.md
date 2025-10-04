# 🔤 Machine Perkins Braille - Simulateur d'Entraînement

Un simulateur interactif en ligne pour apprendre et s'entraîner à la machine Perkins, l'outil de référence pour l'écriture en braille.

## 🌟 Fonctionnalités

- **Simulation réaliste** : Utilisez votre clavier (F, D, S, J, K, L) pour reproduire les 6 points braille
- **Retour vocal** : Prononciation automatique en français des lettres saisies
- **64 caractères** : Alphabet complet, lettres accentuées, chiffres et ponctuation
- **Dimensions normées** : Cellules braille aux dimensions réelles (échelle ×2)
- **Alertes sonores** : Bip d'avertissement au 25ème caractère
- **100% gratuit** : Accessible depuis n'importe quel navigateur

## 🎯 Comment utiliser

### Positionnement des doigts

**Main gauche :**
- F → Point 1 (haut gauche)
- D → Point 2 (milieu gauche)
- S → Point 3 (bas gauche)

**Main droite :**
- J → Point 4 (haut droit)
- K → Point 5 (milieu droit)
- L → Point 6 (bas droit)

### Saisie

1. Appuyez simultanément sur les touches correspondant aux points souhaités
2. Relâchez les touches pour créer le caractère
3. Écoutez la prononciation automatique de la lettre
4. Utilisez **ESPACE** pour espacer et **ENTRÉE** pour aller à la ligne

### Exemples

- **Lettre A** : Appuyez sur F (point 1)
- **Lettre B** : Appuyez sur F+D (points 1+2)
- **Lettre C** : Appuyez sur F+J (points 1+4)

## 📦 Installation locale

1. Clonez ce repository :
```bash
git clone https://github.com/votre-nom/machine-perkins-braille.git
cd machine-perkins-braille
```

2. Ouvrez `index.html` dans votre navigateur

Aucune installation de dépendances n'est nécessaire !

## 🚀 Déploiement

### GitHub Pages

1. Forkez ce repository
2. Allez dans Settings > Pages
3. Sélectionnez la branche `main` comme source
4. Votre site sera accessible à `https://votre-nom.github.io/machine-perkins-braille`

### Netlify

1. Connectez votre repository GitHub à Netlify
2. Déployez automatiquement à chaque commit

## 📁 Structure du projet

```
machine-perkins-braille/
├── index.html              # Page d'accueil
├── entrainement.html       # Simulateur Perkins
├── css/
│   └── style.css          # Styles du site
├── js/
│   └── braille.js         # Logique du simulateur
└── README.md              # Documentation
```

## 🛠️ Technologies utilisées

- HTML5
- CSS3 (Grid, Flexbox)
- JavaScript (Vanilla)
- Web Speech API (synthèse vocale)
- Web Audio API (alertes sonores)

## 📚 Référence Braille

Le simulateur utilise le **braille français unifié** avec :
- 26 lettres de base (a-z)
- 14 lettres accentuées (à, â, é, è, ê, ë, î, ï, ô, ù, û, ü, ç, œ)
- 10 chiffres (0-9) + préfixe numérique
- 15 signes de ponctuation
- Préfixe majuscule

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Proposer de nouvelles fonctionnalités
- Améliorer la documentation

## 📝 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser, le modifier et le distribuer.

## 👏 Remerciements

- Communauté braille pour les spécifications
- Utilisateurs et contributeurs du projet

## 📧 Contact

Pour toute question ou suggestion, ouvrez une issue sur GitHub.

---

**⭐ Si ce projet vous est utile, n'hésitez pas à lui donner une étoile !**