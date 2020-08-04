import express from 'express';
import routes from "./routes";

//Constantes globais
const app = express();
app.use(routes);
app.use(express.json());
app.listen(3333 || 10, () => {
    console.log(`Server running at: http://localhost:3333/`)
});