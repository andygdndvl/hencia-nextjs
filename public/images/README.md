# Structure des Images - École Marketing Digital

## Organisation des dossiers

### 🦸‍♂️ `/hero/`
Images pour la section hero :
- `hero-main.jpg` - Image principale hero
- `hero-background.jpg` - Arrière-plan hero
- `students-group.jpg` - Groupe d'étudiants
- `digital-workspace.jpg` - Espace de travail digital

### 📚 `/formations/`
Images pour les différentes formations :
- `bts-ndrc.jpg` - Image principale BTS NDRC
- `bachelor-marketing.jpg` - Image Bachelor Marketing Digital  
- `mastere-marketing.jpg` - Image Mastère Marketing Digital
- `formation-generale.jpg` - Image générique formations

### 🏢 `/about/`
Images pour présenter l'école :
- `school-building.jpg` - Bâtiment de l'école
- `classroom.jpg` - Salle de classe
- `computer-lab.jpg` - Laboratoire informatique
- `library.jpg` - Bibliothèque
- `meeting-room.jpg` - Salle de réunion

### 💬 `/testimonials/`
Photos des témoignages :
- `student-1.jpg` - Photo étudiant 1
- `student-2.jpg` - Photo étudiant 2
- `alumni-1.jpg` - Photo ancien élève 1
- `alumni-2.jpg` - Photo ancien élève 2

### 🤝 `/partners/`
Logos des entreprises partenaires :
- `partner-1.png` - Logo partenaire 1
- `partner-2.png` - Logo partenaire 2
- `google.png` - Logo Google
- `facebook.png` - Logo Facebook
- `microsoft.png` - Logo Microsoft

### 🎉 `/events/`
Images des événements :
- `graduation.jpg` - Remise de diplômes
- `conference.jpg` - Conférence
- `workshop.jpg` - Atelier
- `networking.jpg` - Événement networking

### 🏗️ `/facilities/`
Images des équipements :
- `computer-room.jpg` - Salle informatique
- `coworking-space.jpg` - Espace coworking
- `cafeteria.jpg` - Cafétéria
- `study-room.jpg` - Salle d'étude

### 🏙️ `/campus/`
Images des différents campus (existant - ne pas modifier) :
- `ecole marketing paris.jpg` - Campus Paris
- `ecole marketing lyon.jpeg` - Campus Lyon
- `ecole marketing lille.jpg` - Campus Lille
- `ecole marketing montpellier.jpg` - Campus Montpellier
- `ecole marketing nice.jpeg` - Campus Nice
- `ecole de marketing bordeaux.jpg` - Campus Bordeaux
- `ecole marketing versaille.jpg` - Campus Saint-Quentin
- `ecole marketing marne la vallee.jpg` - Campus Val d'Europe

## Recommandations techniques

### Formats recommandés :
- **Photos** : `.jpg` ou `.webp` (meilleure compression)
- **Logos/Icônes** : `.png` ou `.svg` (transparence)
- **Illustrations** : `.svg` (vectoriel, redimensionnable)

### Tailles recommandées :
- **Hero images** : 1920x1080px (16:9)
- **Formation cards** : 800x600px (4:3)
- **Campus cards** : 400x300px (4:3)
- **Portraits** : 400x400px (1:1)
- **Logos partenaires** : 200x100px max

### Optimisation :
- Compresser les images avant upload
- Utiliser des formats modernes (WebP) quand possible
- Prévoir des versions responsive (différentes tailles)
- Nommer les fichiers de manière descriptive

## Utilisation dans le code

```jsx
// Exemple d'utilisation
<img 
  src="/images/formations/bts-ndrc.jpg" 
  alt="Formation BTS NDRC"
  className="w-full h-64 object-cover"
/>
```

## Notes importantes

- Toutes les images doivent être libres de droits
- Respecter les droits à l'image pour les photos de personnes
- Maintenir une cohérence visuelle entre les images
- Prévoir des images de fallback pour chaque section