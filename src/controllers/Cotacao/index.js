const { convert, toMoney } = require('../../lib/convert');

function CotacaoController(req, res) {
  const { cotacao, quantidade } = req.query;
  const conversao = convert(cotacao, quantidade);
  res.render('cotacao', {
    cotacao: toMoney(cotacao),
    quantidade: toMoney(quantidade),
    result: toMoney(conversao),
  });
}

module.exports = { CotacaoController };
