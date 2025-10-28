# Daniel Seguin - Senior IT Consultant Website

Professional Angular website showcasing the services, skills, projects, and expertise of Daniel Seguin, Senior IT Consultant.

## Features

- **Angular 17**: Modern Angular framework with standalone components
- **Multi-Page Routing**: Separate pages for each section with Angular Router
- **Multi-language Support**: Available in English, French, and Spanish
- **Responsive Design**: Fully responsive across all devices
- **Dynamic Content**: Services, products, skills, and projects loaded from JSON files
- **Modern UI**: Clean, professional design with smooth animations
- **Type-Safe**: Built with TypeScript for better code quality

## Pages

The website consists of 8 separate pages:
1. **Home** (`/home`) - Hero section with welcome message
2. **Services** (`/services`) - IT consulting services
3. **Products** (`/products`) - Products with "Coming Soon" indicators
4. **Skills** (`/skills`) - Technical skills with experience
5. **Projects** (`/projects`) - Portfolio projects
6. **Demo** (`/demo`) - Demo website templates
7. **About Me** (`/about`) - Personal bio and information
8. **Contact** (`/contact`) - Contact form and address

## Technology Stack

- **Framework**: Angular 17
- **Language**: TypeScript
- **Routing**: Angular Router
- **Styling**: CSS3
- **Build Tool**: Angular CLI
- **Development Server**: Vite

## Project Structure

```
src/
├── app/
│   ├── components/          # All Angular components (now routed pages)
│   │   ├── navbar/         # Navigation component
│   │   ├── home/           # Home page
│   │   ├── services/       # Services page
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

This website is automatically deployed to GitHub Pages at [daniel.seguin.dev](https://daniel.seguin.dev) when changes are pushed to the `main` branch.

#### Automatic Deployment

The deployment is handled by a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:
1. Builds the Angular application in production mode
2. Deploys the built files to GitHub Pages
3. Configures the custom domain daniel.seguin.dev

#### Manual Build

To build the project manually for GitHub Pages:

```bash
npm run build -- --base-href="/"
```

The build artifacts will be stored in the `dist/daniel-seguin-website/browser/` directory.

#### Custom Domain Configuration

The custom domain is configured via the `src/CNAME` file, which contains:
```
daniel.seguin.dev
```

This file is automatically copied to the build output and tells GitHub Pages to serve the site at the custom domain.

**DNS Configuration**: Ensure the DNS for seguin.dev is configured with:
- A records pointing to GitHub Pages IP addresses:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
- Or a CNAME record for `daniel` pointing to `danieloseguin67.github.io`

### Netlify/Vercel

Simply connect your repository and these platforms will automatically detect the Angular build configuration.

## Contact

For inquiries, use the contact form on the website or email: daniel@seguin.dev

**Address**: 7227 Newman Boulevard, Unit 1504, Montreal (Lasalle), Quebec, H8N 0H7

## License

© 2024 Daniel Seguin - Senior IT Consultant. All rights reserved.
