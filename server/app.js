const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index.routes.js');
const app = express();
const port = 3000 || process.env.PORT;

app.use("/api", indexRouter);

app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});