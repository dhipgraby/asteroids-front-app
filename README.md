# 🚀 AstroAura Asteroids App
UI for Asteroids Api services. Add & remove your favorites asteroids
# Next.js Asteroids App

This Next.js application provides a user-friendly interface for exploring asteroids and managing user favorites. The app integrates seamlessly with backend APIs for authentication, user data, and asteroid information.

## 📄 Pages

1. **Dashboard:** Explore a list of asteroids.
2. **Favorites:** View your favorite asteroids.
3. **Login:** Securely authenticate to access personalized features.
4. **Signup:** Register a new account and start exploring!

## 🛠️ Services

### `asteroidService`

Handles fetching, adding, and removing asteroids. Utilizes `react-toastify` for user-friendly notifications.

#### Methods:

- `handleFetchAsteroids(set: (any: any) => void, get: () => any)`: Fetch asteroids and update state.
- `handleAddFavorite(id: number, set: (any: any) => void, get: () => any)`: Add asteroid to favorites.
- `handleRemoveFavorite(id: number, set: (any: any) => void, get: () => any)`: Remove asteroid from favorites.

### `signupService`

Manages user signup, login, and session regeneration.

#### Methods:

- `handleLogin(email: string, password: string)`: Log in the user.
- `handleSignup(username: string, email: string, password: string)`: Sign up the user.
- `handleRegenSession()`: Regenerate user session.

## 📦 Stores

### `asteroidsStore`

Manages state related to asteroids and user-favorite asteroids using Zustand.

#### Actions:

- `fetchAsteroids()`: Fetch asteroids and update state.
- `fetchUserAsteroids()`: Fetch user-favorite asteroids and update state.
- `addToFavorites(id: number)`: Add asteroid to favorites.
- `removeFavorite(id: number)`: Remove asteroid from favorites.

### `userStore`

Manages user-related state, including login, logout, signup, and session regeneration using Zustand.

#### Actions:

- `login(email: string, password: string)`: Log in the user.
- `signup(username: string, email: string, password: string, callback: (bool: boolean) => void)`: Sign up the user.
- `logout()`: Log out the user.
- `regenSession()`: Regenerate user session.

## 🚀 Getting Started

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Start the development server: `npm run dev`.

Feel free to explore and contribute! If you have any questions write me at kenneth.solidity@gmail.com
