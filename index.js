const axios = require("axios");
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json())
app.use(cors());


const appid = "836effd42152e5e8755ce0dbd5a10ae2";
const units = "metric";
const lang = "pt-BR";
const cnt = "1";



app.get("/pesquisar/:cidade", async(req, res) => {

    const q = req.params.cidade;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&units=${units}&appid=${appid}&lang=${lang}&cnt=${cnt}`;
    const resp = await axios.get(url);

    const coord = resp.data.city.coord;
    const cidade = resp.data.city.name;
    const temp = resp.data.list[0].main.temp;
    const senT = resp.data.list[0].main.feels_like;
    const descricao = resp.data.list[0].weather[0].description;
    const dados = {
        cidade,
        temp,
        senT,
        descricao,
        coord
    };
    res.json(dados);
});

app.listen(3000, () => console.log('Aplicação rodando'));