const express = require('express');
const app = express();
const db = require('./config/db');
const colaboradorRoutes = require('./routes/colaboradorRoutes');
const reembolsoRoutes = require('./routes/reembolsoRoutes');

app.use(express.json());
app.use('/colaboradores', colaboradorRoutes);
app.use('/reembolsos', reembolsoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));