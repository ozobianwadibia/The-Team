# The-Team

Team management app for US Soccer players. Backend is Node/Express with Sequelize + MySQL. Frontend is React (Vite + MUI).

## Architecture

- **Backend**: Express server with Sequelize models and MySQL database (`server.js`, `models/`, `routes/`, `config/`).
- **Frontend**: React app built with Vite (`client/`).
- **Ports**:
  - Backend API: `http://localhost:8080`
  - Frontend: `http://localhost:5173`

## Prerequisites

- Node.js 18+ and npm
- MySQL 8 (or compatible) running locally
- MySQL may be run using virtualization tools like [Podman](https://podman.io/) or [Docker](https://www.docker.com/)

## Backend Setup (API)

1. Install server dependencies at the repo root:

```bash
npm install
```

2. Create a MySQL database (default name used by the repo is `SoccerTeamUSA_db`).

3. Configure environment variables. Create a `.env` file in the project root:

```bash
# Server
PORT=8080

# Database (override values in config/config.json)
DB_NAME=SoccerTeamUSA_db
DB_USER=root
DB_PASS=your_password_here
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DIALECT=mysql
```

Notes:

- The app reads `config/config.json` for defaults, but `.env` variables (e.g., `DB_NAME`, `DB_USER`) override them (see `models/index.js`).
- CORS is enabled for `http://localhost:5173` and `http://127.0.0.1:5173` (see `server.js`).
- On startup the server runs `sequelize.sync({ force: true })` and seeds the database (`seeds/seed_SoccerTeamUSA_db.js`). This will drop and recreate tables each time you start the server.

4. Start the backend:

```bash
npm start
```

You should see `App listening on PORT 8080` in the console.

## Frontend Setup (Web UI)

1. Install client dependencies:

```bash
cd client
npm install
```

2. Run the frontend (Vite dev server):

```bash
npm run dev
```

Open `http://localhost:5173` in your browser. The UI communicates with the backend at `http://localhost:8080`.

## Development Workflow

- Run both servers at the same time:
  - Backend at the repo root: `npm start`
  - Frontend in `client/`: `npm run dev`
- The backend allows requests from the Vite dev server via CORS.

## Environment Variables Summary

Define these in `.env` at the repo root:

```bash
PORT=8080
DB_NAME=SoccerTeamUSA_db
DB_USER=root
DB_PASS=your_password_here
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DIALECT=mysql
```

## Building the Frontend for Production

From `client/`:

```bash
npm run build
npm run preview  # optional local preview on port 5173
```

This generates a production build in `client/dist/`. You can serve it with any static HTTP server or integrate it behind a reverse proxy with the API.

Note: The current Express server serves static files from `public/`. To serve the React build from the Node server, you can copy or point `client/dist` to `public`, or add a dedicated static serve middleware to Express that serves the `client/dist` directory.

## Troubleshooting

- **Cannot connect to MySQL**: Verify credentials in `.env`, ensure MySQL is running, and that the user has privileges to create tables.
- **CORS errors**: Ensure you access the frontend via `http://localhost:5173` or `http://127.0.0.1:5173`. Backend CORS is configured for those origins.
- **Data resets on server start**: This is expected, due to `sequelize.sync({ force: true })` in `server.js`. Remove `force: true` to persist data across restarts.
- **Port already in use**: Change `PORT` in `.env` or stop the conflicting process.

## Project Structure

```
The-Team/
├─ client/                 # React + Vite app
│  ├─ src/
│  ├─ package.json
│  └─ vite.config.*
├─ models/                 # Sequelize models and initialization
├─ routes/                 # API and HTML routes
├─ seeds/                  # Seed data executed on server startup
├─ config/config.json      # Sequelize config (overridable via .env)
├─ server.js               # Express server entry
├─ package.json            # Backend scripts and deps
└─ README.md
```

## License

MIT (c) Ozobia Nwadibia
