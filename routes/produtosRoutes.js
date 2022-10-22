const router = require('express').Router();
const Produtos = require('../models/Produtos');

//criando dados
router.post('/', async (req, res) => {
  const { produto, valor, descricao } = req.body;

  if (!produto) {
    res.status(422).json({ error: "O Produto e obrigatorio" })
  }

  const data = {
    produto,
    valor,
    descricao,
  }

  try {
    await Produtos.create(data)
    res.status(201).json({ message: 'Produto cadastrado com sucesso!' })
  } catch (error) {
    res.status(500).json({ erro: error })
  }
});

//Leitura dados

router.get('/', async (req, res) => {
  try{
    const produtos = await Produtos.find();
    res.status(200).json(produtos)
  } catch (error) {
    res.status(500).json({ error: error })
  }
})

module.exports = router;