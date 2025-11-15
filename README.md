# Country Information React App

A React application that displays country information using the REST Countries API.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the port shown in the terminal).

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── api/
│   │   └── fetchCountry.js    # API fetching logic
│   ├── components/
│   │   └── CountryCard.jsx    # Country display component
│   ├── App.jsx                # Main app component
│   └── main.jsx               # React entry point
├── index.html                 # HTML template
├── styles.css                 # Global styles
├── package.json               # Dependencies and scripts
└── vite.config.js            # Vite configuration
```

## Features

- Fetches country data from REST Countries API
- Displays country information in a formatted card
- Automatically loads Japan data on page load
- Loading and error states

## Technologies

- React 18
- Vite (build tool)
- REST Countries API
