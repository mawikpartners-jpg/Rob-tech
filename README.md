# Rob-Tech - Profesjonalna Strona Internetowa

Responsywna, nowoczesna strona internetowa dla firmy Rob-Tech specjalizującej się w produkcji przyczep niskopodwoziowych, platform ciężarowych i usługach transportowych.

## 🚀 Technologia

- **Vite** - Ultra-szybki bundler dla projektów nowoczesnych
- **React 18** - Biblioteka do budowy interfejsów użytkownika
- **TypeScript** - Typizacja dla JavaScript
- **Tailwind CSS** - Framework CSS utility-first
- **Responsive Design** - Mobile-first podejście

## 📋 Cechy Strony

- ✅ Header z nawigacją i menu mobilnym
- ✅ Hero section z wezwaniem do działania (CTA)
- ✅ Sekcja "O nas" z wartościami firmy
- ✅ Sekcja Usługi z ikonami i opisami
- ✅ Galeria realizacji z lazy loading
- ✅ Opinie klientów (mockup)
- ✅ Sekcja aktualności
- ✅ Formularz kontaktowy
- ✅ Responsywny design
- ✅ Animacje CSS
- ✅ Semantic HTML
- ✅ SEO-friendly

## 🛠️ Instalacja

### Wymagania
- Node.js 16+ 
- npm 7+

### Kroki

1. **Klonuj lub przejdź do projektu:**
```bash
cd Rob-tech
```

2. **Zainstaluj zależności** (jeśli nie zostały jeszcze zainstalowane):
```bash
npm install
```

3. **Uruchom serwer deweloperski:**
```bash
npm run dev
```

Aplikacja otworzy się automatycznie w przeglądarce na `http://localhost:3000`

## 🏗️ Budowanie do produkcji

```bash
npm run build
```

Zminifikowany kod pojawi się w folderze `dist/`

## 📁 Struktura Projektu

```
src/
├── components/
│   ├── UI/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── SectionTitle.tsx
│   │   └── LazyImage.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Gallery.tsx
│   ├── Testimonials.tsx
│   ├── News.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── types/
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css
public/
├── [zdjęcia produktów w formacie WebP]
└── ...
```

## 🎨 Schemat Kolorów

- **Niebieski (Primary)**: #3b82f6, #1e40af
- **Pomarańczowy (Accent)**: #f97316, #ea580c
- **Szary**: Odcienie szarości dla tekstu i tła

## 📱 Responsywność

Strona jest w pełni responsywna i testowana na:
- Urządzeniach mobilnych (SM: 640px)
- Tabletach (MD: 768px, LG: 1024px)
- Komputerach stacjonarnych (XL: 1280px)

## 🔧 Konfiguracja

### Tailwind CSS
Konfiguracja znajduje się w `tailwind.config.js` z niestandardowymi kolorami i animacjami.

### Vite Config
Plik `vite.config.ts` zawiera konfigurację serwera deweloperskiego.

## 🎬 Animacje

- **fade-in**: Płynne pojawianie się elementów
- **slide-up**: Elementy wsuwają się od dołu
- **hover effects**: Interaktywne efekty na najechaniu myszą

## ♿ Dostępność

- Semantic HTML (section, article, nav, etc.)
- Prawidłowe użycie nagłówków (h1-h6)
- Focus stany dla wszystkich interaktywnych elementów
- ARIA labels gdzie potrzebne

## 🖼️ Galeria Zdjęć

Galeria automatycznie używa obrazów z folderu `public/` i wspiera:
- Lazy loading dla optymalizacji wydajności
- Powiększanie kliknięciem
- Responsywny grid

## 📞 Kontakt

Formularz kontaktowy zawiera:
- Walidację pól
- Przechowywanie danych w state
- Alert potwierdzający wysłanie

## 📄 Licencja

Projekt stworzony dla firmy Rob-Tech.

## 🚀 Deployment

Strona jest gotowa do deploymentu na:
- Vercel
- Netlify
- GitHub Pages
- Dowolny hosting wspierający Node.js

Wystarczy przesłać zawartość folderu `dist/` po wykonaniu `npm run build`

---

**Wersja**: 1.0.0  
**Ostatnia aktualizacja**: Luty 2026
