const BuscaStrategy = require('./BuscaStrategy');

class BuscaPorNomeStrategy extends BuscaStrategy {
    buscar(contatos, termo) {
        return contatos.filter(contato => contato.nome.toLowerCase().includes(termo.toLowerCase()));
    }
}

module.exports = BuscaPorNomeStrategy;
