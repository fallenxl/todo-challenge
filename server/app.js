const express = require('express');
const path = require('path');
const cors = require('cors');
const indexRouter = require('./src/routes/index.routes.js');
const sequelize = require('./src/database/database.js');

const app = express();
const port = 3000 || process.env.PORT;


/*
 * Middlewares 
 */
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
/*
 * Routes
 */
app.use("/api", indexRouter);

/*
 * Frontend
 */
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

sequelize.sync({ force: true })
.then(() => {console.log('Database is connected')});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});