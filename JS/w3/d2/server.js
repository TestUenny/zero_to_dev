import express from 'express';
import routes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/', routes);

// Start server
app.listen(PORT, () => {
 console.log(`🚀 Server running at http://localhost:${PORT}`);
});
