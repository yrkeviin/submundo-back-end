require("dotenv").config();
const express = require("express");
const cors = require("cors");
const eventoRoutes = require("./src/routes/eventoRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", eventoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});