const router = require('express').Router();
const Produtos = require('../models/Produtos');

//criando dados
router.post('/', async (req, res) => {
  const { produto, valor, descricao } = req.body;

  if (!produto) {
    res.status(422).json({ error: "O Produto é obrigatorio" })
  };

  const data = {
    produto,
    valor,
    descricao,
  };

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
});

router.get('/:id', async (req, res) => {
  //extrair dado da requisição, pela url = req.params
  const id = req.params.id;
  try {
    const produto = await Produtos.findOne({ _id: id });
    if (!produto) {
      res.status(422).json({ message: 'Produto não encontrado!' })
    }
    res.status(200).json(produto)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
});

//update = atualização dados
router.patch('/:id', async (req, res) => {
  const id = req.params.id;
  const { produto, valor, descricao } = req.body;

  const data = {
    produto,
    valor,
    descricao,
  };

  try {
    const atualizarProduto = await Produtos.updateOne({ _id: id }, data);
    if (atualizarProduto.matchedCount === 0) {
      res.status(422).json({ message: 'Produto não encontrado!' })
    }
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
});

//deleta produto
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const produto = await Produtos.findOne({ _id: id  })

  if (!produto) {
    res.status(422).json({ message: 'Produto não encontrado!' })
  }

  try {
    await Produtos.deleteOne({ _id: id })

    res.status(200).json({ message: 'Produto removido com sucesso!' })
  } catch (error) {
    res.status(500).json({ erro: error })
  }
});

module.exports = router;