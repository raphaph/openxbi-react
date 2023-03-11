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
      creator: "raphaph",
      description: "traz uma funcionalidade 'hover me', que ao passar o mouse, um card oculto surge, com diversas informações adicionais, experiemnte trocar as informações e icones, duplicar as linhas e personalizar o card para seu objetivo.",
    },
    {
      "id": "7c386781-c954-45c7-a224-e8149f39dd86",
      "name": "card-flipX",
      "path": "/src/components/@Contents/card-flipX.html",
      "type": "card",
      "creator": "raphaph",
      "description": "traz funcionalidade de rotateX, no caso o card gira e traz novas informações sobre o ano anterior além de um card oculto com informações sobre a meta do ano atual, experimente personalizar e adapta-lo aos seus dados."
    },
    {
      "id": "9dc61f3c-de65-46b1-a0ad-a0e339f4a225",
      "name": "card-received-category",
      "path": "/src/components/@Contents/card-received-category.html",
      "type": "card",
      "creator": "raphaph",
      "description": "exibe o valor recebido bruto, e a distribuição por categoria, você pode duplicas as div's de categoria e adapta-las as suas necessidades, além de personalizar as cores e outras propriedades."
   },
   {
      "id": "2dcb78d2-ce62-49a7-a56d-c581a082482c",
      "name": "chart-peak-hour",
      "path": "/src/components/@Contents/chart-peak-hour.html",
      "type": "chart",
      "creator": "raphaph",
      "description": "para usuários que trabalham com horas, este card pode ser bastante útil, tanto para uso, quanto para fins de aprendizagem, o mesmo exibe horários de pico e dentro do horários comercial das 8h as 18h, podendo ser modificado para sua necessidade."
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
  const { name, path, type, creator, description  } = req.body;
  if (!name || !path || !type || !creator || !description ) {
    return res.status(400).json({ error: 'Invalid data' });
  }
  const id = uuidv4();
  const content = { id, name, path, type, creator, description };
  contents.contents.push(content);
  res.json(content);
});

app.put('/contents/:id', authMiddleware, (req, res) => {
  const { id } = req.params;
  const { name, path, type, creator, description } = req.body;
  const contentIndex = contents.contents.findIndex(c => c.id === id || c.name === id);
  if (contentIndex < 0) {
    return res.status(404).json({ error: 'Content not found' });
  }
  const updatedContent = { ...contents.contents[contentIndex], name, path, type, creator, description };
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
const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`OpenXBI Server API started on port ${port}`);
});