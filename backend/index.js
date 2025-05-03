import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbconnection } from './database/data.js';
import reservationRouter from './routes/reservationRoutes.js';
import { handleError } from './error/error.js';

dotenv.config({ path: './config/.env' });

const app = express();

// Middleware
app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['POST'],
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to DB
dbconnection();

// Routes
app.use('/api/v1/reservation', reservationRouter);
app.get("/", (req, res, next)=>{return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN"
  })})
  
// Error Handler
app.use(handleError);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
