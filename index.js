const express = require("express");
const app = express();
const { sequelize } = require("./src/db/models");

const PORT = 3000;

const book = require('./src/routes/book');
const copy = require('./src/routes/copy');
const loan = require('./src/routes/loan');
const member = require('./src/routes/member');
const transaction = require('./src/routes/transaction');

app.use('/api/books',book);
// app.use('/api/copies',copy);
// app.use('/api/loan',loan);
// app.use('/api/member',member);
// app.use('/api/transaction',transaction);


app.listen(PORT, async () => {
  console.log(
    `Library management system backend(server) listening at http://localhost:${PORT}`
  );
  await sequelize.authenticate();
  console.log("Database connected!");
});