# SISPAR - Backend

API desenvolvida com Node.js e Express para gerenciamento de colaboradores e reembolsos.

## Instruções

1. Instale as dependências:
   ```
   npm install
   ```

2. Configure o banco de dados PostgreSQL e atualize o arquivo `.env` com sua `DATABASE_URL`.

3. Rode o projeto:
   ```
   node app.js
   ```

## Rotas Principais

### Colaboradores
- `POST /colaboradores` - Cadastrar colaborador
- `GET /colaboradores` - Listar todos os colaboradores

### Reembolsos
- `POST /reembolsos` - Criar novo reembolso
- `GET /reembolsos/:numero` - Buscar reembolso por número de prestação