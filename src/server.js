const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Estado inicial
let contents = {
  contents: [
    {
      id: "2b248371-d3d9-42b7-b8af-342a14f89f22",
      name: "card-detailed",
      path: "/src/components/@Contents/card-detailed.html",
      type: "card",
      creator: "raphaph"
  }
  ]
};

// GET COM AXIOS

// const axios = require('axios');

// const API_KEY = 'sua_api_key_aqui';

// axios.get('http://sua-api.com/contents', {
//   headers: {
//     'Authorization': `Bearer ${API_KEY}`
//   }
// })
//   .then(response => console.log(response.data))
//   .catch(error => console.log(error));

// Middleware para verificar a autenticação
const authMiddleware = (req, res, next) => {
  const authKey = req.headers['authorization'];
  if (!authKey || authKey !== process.env.AUTH_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

// Rotas
app.get('/contents', authMiddleware, (req, res) => {
  res.json(contents);
});

app.get('/contents/:id', authMiddleware, (req, res) => {
  const { id } = req.params;
  const content = contents.contents.find(c => c.id === id || c.name === id);
  if (!content) {
    return res.status(404).json({ error: 'Content not found' });
  }
  res.json(content);
});

app.post('/contents', authMiddleware, (req, res) => {
  const { name, src, code } = req.body;
  if (!name || !path || !type || !creator ) {
    return res.status(400).json({ error: 'Invalid data' });
  }
  const id = uuidv4();
  const content = { id, name, path, type, creator };
  contents.contents.push(content);
  res.json(content);
});

app.put('/contents/:id', authMiddleware, (req, res) => {
  const { id } = req.params;
  const { name, path, type, creator } = req.body;
  const contentIndex = contents.contents.findIndex(c => c.id === id || c.name === id);
  if (contentIndex < 0) {
    return res.status(404).json({ error: 'Content not found' });
  }
  const updatedContent = { ...contents.contents[contentIndex], name, path, type, creator };
  contents.contents[contentIndex] = updatedContent;
  res.json(updatedContent);
});

app.delete('/contents/:id', authMiddleware, (req, res) => {
  const { id } = req.params;
  const contentIndex = contents.contents.findIndex(c => c.id === id || c.name === id);
  if (contentIndex < 0) {
    return res.status(404).json({ error: 'Content not found' });
  }
  const deletedContent = contents.contents[contentIndex];
  contents.contents.splice(contentIndex, 1);
  res.json(deletedContent);
});

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});