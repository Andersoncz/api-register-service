import mongoose from 'mongoose';

// Definindo o schema
const ServicoSchema = new mongoose.Schema({
  nome: { type: String, required: true },       // Nome do serviço
  valor: { type: Number, required: true },      // Valor do serviço
  descricao: { type: String, default: '' }      // Descrição (opcional)
}, { 
  timestamps: true // Adiciona createdAt e updatedAt automaticamente
});

// Criando o model
export default mongoose.model('Servico', ServicoSchema);
