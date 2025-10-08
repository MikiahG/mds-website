# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a simple static website built with **Eleventy (11ty)** for a hobby project. It's a straightforward static site generator setup that creates a website with basic project information, privacy policy, SLA, and uptime monitoring integration.

## Development Commands

### Installation
```bash
npm install
```

### Development Server
```bash
npm run serve
# or
npm start
```
The development server runs at `http://localhost:8080` with live reload.

### Build
```bash
npm run build
```
Generates static files in the `dist/` directory.

### Clean Build Files
```bash
npm run clean
```
Removes the `dist/` directory and all built files.

## Architecture

### Static Site Generation
- **Generator**: Eleventy (11ty) v3.1.2
- **Input Directory**: `src/`
- **Output Directory**: `dist/`
- **Template Engine**: Nunjucks (`.njk` files)

### Project Structure
```
src/
├── _includes/          # Layout templates
│   └── base.njk       # Main layout template with navigation and footer
├── _data/             # Global data files
│   └── site.json      # Site configuration (title, year, uptime monitor settings)
├── assets/            # Static assets
│   └── styles.css     # Main stylesheet with responsive design
├── index.md           # Home page content
├── privacy.md         # Privacy policy page
└── sla.md             # Service level agreement page
```

### Configuration
- **Eleventy Config**: `.eleventy.js` - Minimal configuration that copies static assets and sets directory structure
- **Site Data**: `src/_data/site.json` - Contains global site variables accessible in all templates
- **Layout System**: Single base layout (`base.njk`) used by all pages via frontmatter

### Content Management
- **Pages**: Written in Markdown with YAML frontmatter
- **Layout**: All pages use `layout: base.njk` in frontmatter
- **Navigation**: Hardcoded in base template with conditional uptime monitor link
- **Styling**: Single CSS file with mobile-responsive design using CSS Grid/Flexbox

### Key Features
- **Responsive Design**: Mobile-first CSS with breakpoints
- **Uptime Monitoring**: Configurable external monitor integration
- **Static Assets**: Automatic passthrough copying from `src/assets/`
- **Simple Routing**: Eleventy's default file-based routing (e.g., `privacy.md` → `/privacy/`)

## Customization

### Site Settings
Edit `src/_data/site.json` to modify:
- `title`: Project name displayed in header and page titles
- `year`: Copyright year in footer
- `uptime_monitor_url`: External uptime monitor link
- `uptime_monitor_embed`: HTML embed code for uptime widget

### Content Pages
- **Home**: Edit `src/index.md`
- **Privacy**: Edit `src/privacy.md`  
- **SLA**: Edit `src/sla.md`

### Styling and Layout
- **CSS**: Edit `src/assets/styles.css`
- **Layout Template**: Edit `src/_includes/base.njk`

## Deployment

The built static files in `dist/` can be deployed to any static hosting service (GitHub Pages, Netlify, Vercel, traditional web hosting). Most services support automatic deployment from Git repositories.
