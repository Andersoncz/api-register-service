import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Servico from './Service.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Conectar ao MongoDB
const commetDB = async () => { 
    try { 
        await
    mongoose.connect(process.env.MONGO_URI)
console.log("Conectado ao MongoDB")
}

    catch (error) { console.error("Erro ao conectar ao MongoDB:", error);
        process.exit(1);
        
    }
    ;
 
  
}
commetDB();



// Rota para adicionar serviço
app.post('/servicos', async (req, res) => {
  try {
    const novoServico = await Servico.create(req.body);
    res.status(201).json(novoServico);
  } catch (err) {
    res.status(400).json({ erro: 'Erro ao adicionar serviço' });
  }
});

// Rota para buscar serviços
app.get('/servicos', async (req, res) => {
  const servicos = await Servico.find().sort({ createdAt: -1 });
  res.json(servicos);
});

// Rota para deletar serviço
app.delete('/servicos/:id', async (req, res) => {
  await Servico.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

// Rota para editar serviço
app.put('/servicos/:id', async (req, res) => {
  const servico = await Servico.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(servico);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
