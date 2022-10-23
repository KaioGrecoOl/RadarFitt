// configuração inicial
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
dotenv.config();


//forma de ler JSON
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// rotas API
const produtoRoutes = require('./routes/produtosRoutes');

app.use('/produtos', produtoRoutes);

//rota inicial

app.get('/', (req, res) => {
  res.json({message: "Express funcionando!"});
});

//porta onde será disponibilizada aplicação
mongoose.connect(`mongodb+srv://Kaio:${process.env.SECRET_DB}@radarfit.tf6rwz5.mongodb.net/?retryWrites=true&w=majority`).then(() => {
  console.log('Oi MongoDB');
  app.listen(process.env.PORT || 3001);
}).catch((err) => console.log(err));