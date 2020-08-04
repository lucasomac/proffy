import express from 'express';

//Constantes globais
const app = express();
app.get('/', (request, response) => {
    return response.send({"status": `Server running at: http://localhost:3333/`})
});
app.use(express.json());
app.listen(3333 || 10, () => {
    console.log(`Server running at: http://localhost:3333/`)
});