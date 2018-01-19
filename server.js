const express = require('express');
const path = require('path');
const app = express();

const port = process.env.APP_PORT || 3000;

app.use(express.static('public'));
app.get(`/*`, (req, res, next) => res.sendFile(path.resolve(`./public/index.html`)));

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
