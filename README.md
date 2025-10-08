# Hobby Website

A simple static website built with [Eleventy](https://www.11ty.dev/) for my hobby project. This site includes basic project information, privacy policy, SLA, and uptime monitoring integration.

## Features

- 🏠 **Home Page**: Project overview and features
- 🔒 **Privacy Policy**: Comprehensive privacy protection details  
- 📋 **Service Level Agreement**: Service commitments and limitations
- 📊 **Uptime Monitor**: Real-time service status (configurable)
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🚀 **Static Site**: Fast loading, easy to deploy

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd hobby-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server with live reload:

```bash
npm run serve
# or
npm start
```

The site will be available at `http://localhost:8080`.

### Building for Production

To build the static site for deployment:

```bash
npm run build
```

The generated files will be in the `dist/` directory.

### Cleaning Build Files

To remove the built files:

```bash
npm run clean
```

## Configuration

### Site Settings

Edit `src/_data/site.json` to customize:

- `title`: Your project name
- `year`: Copyright year
- `uptime_monitor_url`: Link to your uptime monitor
- `uptime_monitor_embed`: HTML embed code for uptime monitor

### Content

- **Home Page**: Edit `src/index.md`
- **Privacy Policy**: Edit `src/privacy.md`
- **SLA**: Edit `src/sla.md`

### Styling

- **CSS**: Edit `src/assets/styles.css`
- **Layout**: Edit `src/_includes/base.njk`

## Deployment

This is a static site generator, so the built files in `dist/` can be deployed to any static hosting service:

- **GitHub Pages**: Push to a GitHub repository with Pages enabled
- **Netlify**: Connect your repository for automatic deployments  
- **Vercel**: Connect your repository for automatic deployments
- **Traditional Web Hosting**: Upload `dist/` contents via FTP/SFTP

### Continuous Deployment

Most hosting services support automatic deployment from Git. After pushing changes to your repository, the site will rebuild and deploy automatically.

## File Structure

```
hobby-website/
├── src/
│   ├── _includes/          # Layout templates
│   │   └── base.njk       # Main layout
│   ├── _data/             # Site configuration
│   │   └── site.json      # Site settings
│   ├── assets/            # Static assets
│   │   └── styles.css     # Main stylesheet
│   ├── index.md           # Home page
│   ├── privacy.md         # Privacy policy
│   └── sla.md             # Service level agreement
├── dist/                  # Built site (generated)
├── .eleventy.js           # Eleventy configuration
├── package.json           # Node.js dependencies
└── README.md              # This file
```

## Contributing

This is a personal hobby project, but suggestions and improvements are welcome! Please open an issue or submit a pull request.

## License

This project is open source. See the license file for details.
