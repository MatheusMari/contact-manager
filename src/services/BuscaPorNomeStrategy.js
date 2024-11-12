const BuscaStrategy = require("./BuscaStrategy");

class BuscaPorNomeStrategy extends BuscaStrategy {
  buscar(contatos, termo) {
    if (!Array.isArray(contatos)) {
      throw new Error("\nO parâmetro 'contatos' deve ser um array.");
    }
    if (!termo || typeof termo !== "string") {
      throw new Error("\nO termo de busca deve ser uma string não vazia.");
    }

    return contatos.filter((contato) =>
      contato.nome.toLowerCase().includes(termo.toLowerCase())
    );
  }
}

module.exports = BuscaPorNomeStrategy;
