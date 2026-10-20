# EventMaster-Frontend

My frontend for a web application course.

## Overview
EventMaster-Frontend is the Vue.js client for the EventMaster application. It provides a user-facing interface for registering, logging in, browsing the dashboard, and managing event-related workflows through a REST API backend.

## Features
- User registration and login pages
- JWT-based authentication with saved token handling
- Vue Router navigation
- Protected dashboard route
- Axios integration with the backend API
- Responsive single-page application structure

## Tech Stack
- Vue 3
- Vue Router
- Axios
- JavaScript
- HTML/CSS

## Project Structure
- `src/` - main application source code
- `src/components/` - reusable UI pages/components
- `src/App.vue` - root application wrapper
- `src/main.js` - app bootstrap, router setup, and auth interceptors
- `public/` - static assets
- `package.json` - project scripts and dependencies

## Available Scripts
```bash
npm install
npm run serve
npm run build
npm run lint
```

### Development
```bash
npm run serve
```
This starts the Vue development server for local frontend development.

### Production Build
```bash
npm run build
```
Creates a production-ready build in the `dist` directory.

### Linting
```bash
npm run lint
```
Runs ESLint checks on the Vue project.

## Environment / API Setup
The app is configured to communicate with the backend at:
```js
http://localhost:8000/api/
```
Make sure the Django backend is running and accessible before using the frontend.

## Authentication Flow
- Users can register from `/register`
- Users login from `/login`
- The JWT token is stored in `localStorage`
- Requests automatically include the Bearer token via Axios interceptors
- Protected routes redirect unauthenticated users to the login page

## Notes
This frontend works with the EventMaster backend and is designed to support event planning and management workflows.

## Branch Information
- `main` is the default branch and contains the active frontend project
- `master` also exists in the repository but is not the default branch
