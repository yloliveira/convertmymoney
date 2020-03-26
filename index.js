const express = require('express');
const path = require('path');
const { convert, toMoney } = require('./src/lib/convert');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/src', 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/cotacao', (req, res) => {
  const { cotacao, quantidade } = req.query;
  const conversao = convert(cotacao, quantidade);
  res.render('cotacao', {
    cotacao: toMoney(cotacao),
    quantidade: toMoney(quantidade),
    result: toMoney(conversao),
  });
});

app.listen(3000, error =>
  error ? console.log('error') : console.log('server is running...')
);
