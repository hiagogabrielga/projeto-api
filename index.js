import express from "express";
import {pesquisarTodaLista, consultarAno, buscarIpcaPorId, calcular} from "./servicos/servicos.js";

const app = express();

app.get("/historicoIPCA/", (req, res) => {
    const anoInformado = req.query.ano;
    const resultado = anoInformado ? consultarAno(anoInformado) : pesquisarTodaLista();
    res.json(resultado)

});

app.get("/historicoIPCA/:id",(req,res) => {
    const idIpca = req.params.id;
    res.json(buscarIpcaPorId(idIpca))
})

app.get('/historicoIPCA/calculo', (req, res) => {
    const valor = parseFloat(req.query.valor);
    const mesInicial = parseInt(req.query.mesInicial);
    const anoInicial = parseInt(req.query.anoInicial);
    const mesFinal = parseInt(req.query.mesFinal);
    const anoFinal = parseInt(req.query.anoFinal);

    const resultado = calcular(valor, mesInicial, anoInicial, mesFinal, anoFinal);

    res.json({ resultado: resultado });
});

var data = Date()
app.listen(8080, () => {
    console.log("Servidor iniciado com suesso na porta 8080 em", data);
});