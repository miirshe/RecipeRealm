const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/userRoutes');
const recipeRoutes = require('./routes/recipeRoutes');
const commentRoutes = require('./routes/commentRoutes');
const ratingRoutes = require('./routes/ratingRoutes');
const nutritionInfoRoutes = require('./routes/nutritionInfoRoutes');
const userProfileRoutes = require('./routes/userProfileRoutes');
const multer = require('multer');
const app = express();

const PORT = process.env.PORT || 9000;

app.use(express.json());

app.use(cors());

app.use(cookieParser());

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../client/public/uploads')
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({ storage });
app.post('/api/upload', upload.single('file'), function(req, res) {
    const file = req.file
    return res.status(200).json(file.filename)
})
app.use('/api/upload', (req, res) => {
    return res.send('success')
})

app.use('/api', userRoutes);
app.use('/api', commentRoutes);
app.use('/api', ratingRoutes);
app.use('/api', nutritionInfoRoutes);
app.use('/api', userProfileRoutes);
app.use('/api', recipeRoutes);


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});