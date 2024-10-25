# Camper Adventure Rental App

This application is designed for users seeking to rent campers for their travels. The app provides a user-friendly interface for browsing, filtering, and managing a selection of campers. Built using **React**, **Redux**, and **Redux Toolkit**, it ensures efficient state management, while favorites are stored in `localStorage` to maintain data even when the page reloads.

The development experience is powered by **Vite**, delivering a fast and efficient build setup.

## Key Features

- Explore a catalog of available vehicles.
- Filter campers by various criteria like location, equipment, and type.
- Add or remove vehicles from your favorites.
- Favorites are saved using `localStorage` and persist after refresh.
- Date selection is powered by **ReactDatePicker**.
- Navigation within the app is handled using **React Router**.
- **Redux Toolkit** is used to manage the application state efficiently.

## Requirements

Ensure you have the following tools installed before running the application:

- [Node.js](https://nodejs.org/) (version 14+ recommended)
- [npm](https://www.npmjs.com/)

## Setup Instructions

### Step 1: Clone the Repository

```bash
git clone https://github.com/icodebits/travel_trucks.git
```

### Step 2: Navigate to the Project Directory
Change directory to the project folder:
```bash
cd travel_trucks
```

### Step 3: Install Dependencies
Run the following command to install all required dependencies:
```bash
npm install
```

### Step 4: Run the Development Server
Start the development server using Vite:
```bash
npm run dev
```

The application will run in development mode. Open your browser and visit:
```bash
http://localhost:4173
```

### Step 5: Build for Production
To build the application for production, run:
```bash
npm run build
```

### Step 6: Preview the Production Build (Optional)
To preview the production build locally:
```bash
npm run preview
```
This will serve the files from the dist folder using a local server.

## Live Preview

You can view the live version of the app hosted on Vercel: [Camper Adventure Rental](https://travel-trucks-project-tan.vercel.app/)

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux & Redux Toolkit**: For managing and maintaining the application state.
- **React Router**: For managing navigation within the app.
- **ReactDatePicker**: A date picker component used for selecting booking dates.
- **localStorage**: To persist user favorites and retain state between sessions.
- **Vite**: A modern frontend tool for fast development and optimized builds.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as per the terms of the license.