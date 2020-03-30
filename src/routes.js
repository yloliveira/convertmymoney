const express = require('express');
const { HomeController, CotacaoController } = require('./controllers');

const router = express.Router();

router.get('/', HomeController);
router.get('/cotacao', CotacaoController);

module.exports = router;
