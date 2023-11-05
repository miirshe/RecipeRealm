const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/userRoutes');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();

const PORT = process.env.PORT || 9000;

app.use(express.json());

app.use(cors());

app.use(cookieParser());

app.use('/api', userRoutes)
app.use('/api', recipeRoutes)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});