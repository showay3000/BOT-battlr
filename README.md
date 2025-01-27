# Bot 

**Bot Battlr** is a React-based web application where users can view a collection of bots and build their own bot army. The app interacts with a backend API to fetch bot data and allows users to enlist, release, and discharge bots dynamically .

---

## Features

1. **Bot Collection**: Displays a list of all available bots fetched from the backend API.
2. **Your Bot Army**: Allows users to enlist bots from the collection and manage their army.
3. **Enlist Bots**: Add a bot to the user's army (no duplicates allowed).
4. **Release Bots**: Remove a bot from the user's army.
5. **Discharge Bots**: Permanently remove a bot from both the user's army and the backend.
6. **Error Handling**: Displays error messages if API requests fail.
7. **Retry Mechanism**: Automatically retries fetching data after 5 seconds if an error occurs during initial load.
8. **Loading State**: Displays a loading message while fetching data.

---

## Project Setup

### Prerequisites

- Node.js (version 16 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/bot-battlr.git
   cd bot-battlr
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up the environment variable for the API URL. Create a `.env` file in the project root:

   ```env
   VITE_API_URL=https://bots-si0g.onrender.com/bots
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open the application in your browser at `http://localhost:5173`.

---

## File Structure

```
├── public
├── src
│   ├── components
│   │   ├── BotCollection.jsx
│   │   ├── YourBotArmy.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
├── .env
├── package.json
```

### Key Files

- `App.jsx`: Main application component that manages state and renders child components.
- `YourBotArmy.jsx`: Displays the user's enlisted bot army with release and discharge functionality.
- `BotCollection.jsx`: Displays the full list of bots and allows users to enlist them into their army.

---

## How to Use

1. **View Bots**: The main page displays all bots fetched from the backend.
2. **Enlist a Bot**: Click the "Enlist" button on a bot in the collection to add it to your army.
3. **Release a Bot**: In "Your Bot Army," click the "Release" button to remove a bot.
4. **Discharge a Bot**: In "Your Bot Army," click the "Discharge" button to remove a bot permanently from the backend and the collection.

---

## API Details

The app interacts with a backend API hosted at `https://bots-si0g.onrender.com/bots`.

### Endpoints

- `GET /bots`: Fetch all bots.
- `DELETE /bots/:id`: Remove a bot from the database.

---

## Error Handling

- If the app encounters an error while fetching data, an error message is displayed.
- The app retries fetching bots after 5 seconds if the initial fetch fails.
- Errors during discharge operations display a notification without affecting the rest of the app.

---

## Future Improvements

1. Add search and filter functionality for the bot collection.
2. Implement sorting options (e.g., by name, type, or rarity).
3. Enhance UI/UX with animations and transitions.
4. Add tests for components and API interactions.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Author

**Your Name**

GitHub: [yourusername](https://github.com/yourusername)

Feel free to contribute by submitting issues or pull requests!

