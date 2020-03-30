const express = require('express');
const path = require('path');
const { HomeController, CotacaoController } = require('./src/controllers');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(`${__dirname}/src`, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', HomeController);
app.get('/cotacao', CotacaoController);

app.listen(3000, (error) =>
  error ? console.log('error') : console.log('server is running...')
);
