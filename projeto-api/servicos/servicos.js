import historicoInflacao from "../dados/dados.js"

export const pesquisarTodaLista = () => {
    return historicoInflacao
}

export const consultarAno = (anoInformado) => {
    const ano  = anoInformado;
    return historicoInflacao.filter(ipca => ipca.ano == ano);
}

export const buscarIpcaPorId = (id) => {
    const idIpca = parseInt(id);
    return historicoInflacao.filter(ipca => ipca.id == idIpca);
}

export const calcular = (valor, mesInicial, anoInicial, mesFinal, anoFinal) => {
    // resultado = valor * ((1 + (ipca1/valor)) * (1 + (ipca2/100)) * ... * (1 + (ipcaN/100)))
    const listaIpca = historicoInflacao.filter((ipca) => {
        if (ipca.ano == anoInicial && ipca.mes >= mesInicial) return ipca;
        if (ipca.ano > anoInicial && ipca.ano < anoFinal) return ipca;
        if (ipca.ano == anoFinal && ipca.mes <= mesFinal) return ipca;
    });

    let resultado = valor;

    listaIpca.forEach(ipca => resultado *= (1 + (ipca.ipca / 100)));
    console.log(resultado)
};


