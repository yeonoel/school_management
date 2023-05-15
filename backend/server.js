import express from 'express';
import { db } from './middlewares/db.js';
import injectionMiddleware from './libs/middlewares.js';
import injectionRoutes from './routes/index.js';
import startServer from './libs/boot.js';
import cors from 'cors'

const app = express();

// Configuration du middleware pour analyser les données de demande JSON
app.use(express.json());
app.use(cors());

// Connexion à la base de données
db();

// Configuration des middleware supplémentaires
injectionMiddleware(app);

// Configuration des routes
injectionRoutes(app);

// Démarrage du serveur
startServer(app);