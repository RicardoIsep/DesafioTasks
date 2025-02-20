# DESAFIO TASKS

Este desafio consiste numa aplicação fullstack de gestão de tarefas. Está dividido em duas aplicações:

- **Backend**: Node.js com Express e MongoDB
- **Frontend**: React com React Query e Vite

## Estrutura do Projeto

```
project-root/
│-- Backend/    # Servidor Node.js (Express, MongoDB)
│-- Frontend/   # Aplicação React (Vite, React Query)
│-- README.md   # Este arquivo
```

## Tecnologias Utilizadas

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT para autenticação

### Frontend

- React.js
- React Query
- React Router
- Tailwind CSS

## Configuração e Execução

### 1. Backend

1. Aceda à pasta `Backend/`
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Crie um ficheiro `.env` na raiz da pasta `Backend/` com as seguintes variáveis:
   ```env
   MONGO_URI=a_sua_mongo_uri
   JWT_KEY=a_sua_chave_secreta
   PORT=5000
   ```
4. Inicie o servidor:
   ```sh
   npm start
   ```

O backend irá correr na porta definida em `PORT`, por padrão `5000`.

### 2. Frontend

1. Aceda à pasta `Frontend/`
2. Instale as dependências:
   ```sh
   npm install
   ```
3. No arquivo `.env`, configure a URL do backend:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```
4. Inicie o frontend:
   ```sh
   npm run dev
   ```

O frontend irá correr em `http://localhost:5173/` (porta padrão do Vite).

## Deploy

### Backend (Render)

1. Configure a URL da base de dados MongoDB Atlas.
2. Adicione as variáveis de ambiente `MONGO_URI`, `JWT_KEY` e `PORT` no Render.
3. Faça deploy conectando ao repositório GitHub.

### Frontend (Netlify)

1. Configure a variável `VITE_API_URL` para apontar para o backend no Render.
2. Configure o Netlify para correr `npm run build` e servir a pasta `dist/`.
3. Faça deploy conectando ao repositório GitHub.

## Endpoints

### **Autenticação** (`/api/auth`)

- `POST /register` - Criação de usuário
- `POST /login` - Autenticação e obtenção de token JWT

### **Tarefas** (`/api/tasks`)

- `GET /tasks` - Listar tarefas
- `POST /tasks` - Criar nova tarefa
- `PATCH /tasks/id` - Alternar estado de conclusão
- `DELETE /tasks/id` - Apagar tarefa

