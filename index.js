const express = require('express');
const path = require('path');

const app = express();
app.use(require('./src/routes'));

app.set('view engine', 'ejs');
app.set('views', path.join(`${__dirname}/src`, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, (error) =>
  error ? console.log('error') : console.log('server is running o port 3000...')
);
