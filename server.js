const express = require('express');
const path = require('path');
const app = express();

// Set absolute paths for Vercel serverless environment
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Main Route
app.get('/', (req, res) => {
    res.render('index');
});

if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Local dev: http://localhost:${PORT}`));
}
module.exports = app;