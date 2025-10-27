# Daniel Seguin - Senior IT Consultant Website

Professional Angular website showcasing the services, skills, projects, and expertise of Daniel Seguin, Senior IT Consultant.

## Features

- **Angular 17**: Modern Angular framework with standalone components
- **Multi-language Support**: Available in English, French, and Spanish
- **Responsive Design**: Fully responsive across all devices
- **Dynamic Content**: Services, products, skills, and projects loaded from JSON files
- **Modern UI**: Clean, professional design with smooth animations
- **Type-Safe**: Built with TypeScript for better code quality

## Technology Stack

- **Framework**: Angular 17
- **Language**: TypeScript
- **Styling**: CSS3
- **Build Tool**: Angular CLI
- **Development Server**: Vite

## Project Structure

```
src/
├── app/
│   ├── components/          # All Angular components
│   │   ├── navbar/         # Navigation component
│   │   ├── home/           # Home/Hero section
│   │   ├── services/       # Services section
│   │   ├── products/       # Products section
│   │   ├── skills/         # Skills section
│   │   ├── projects/       # Projects section
│   │   ├── demo/           # Demo websites section
│   │   ├── about/          # About Me section
│   │   └── contact/        # Contact form section
│   ├── models/             # TypeScript interfaces
│   ├── services/           # Angular services
│   │   ├── translation.service.ts
│   │   └── data.service.ts
│   └── app.component.*     # Root component
├── assets/
│   └── data/               # JSON data files
│       ├── services.json
│       ├── products.json
│       ├── skills.json
│       └── projects.json
└── styles.css              # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/danieloseguin67/mywebsite.git
cd mywebsite
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any source files.

### Build

Build the project for production:
```bash
npm run build
# or
ng build
```

The build artifacts will be stored in the `dist/` directory.

## Customization

### Updating Content

To update content, edit the JSON files in `src/assets/data/`:

- **services.json** - Services offered
- **products.json** - Products available (with `comingSoon` flag)
- **skills.json** - Technical skills with experience duration
- **projects.json** - Portfolio projects with technologies

### Adding Translations

To add or modify translations, edit the `translations` object in `src/app/services/translation.service.ts`.

### Styling

- **Global styles**: `src/styles.css`
- **Component styles**: Each component has its own `.css` file

## Deployment

### GitHub Pages

```bash
ng build --base-href /mywebsite/
```

Then deploy the `dist/daniel-seguin-website/` folder to GitHub Pages.

### Netlify/Vercel

Simply connect your repository and these platforms will automatically detect the Angular build configuration.

## Contact

For inquiries, use the contact form on the website or email: daniel@seguin.dev

**Address**: 7227 Newman Boulevard, Unit 1504, Montreal (Lasalle), Quebec, H8N 0H7

## License

© 2024 Daniel Seguin - Senior IT Consultant. All rights reserved.
