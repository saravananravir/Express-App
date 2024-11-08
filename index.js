const express = require('express');
const app = express();
const PORT = 3000;

// Import Routes
const exampleRoutes = require('./routes/exampleRoutes');

// Middleware
app.use(express.json());

// Use Routes
app.use('/api', exampleRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
