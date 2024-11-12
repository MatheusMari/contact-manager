class BuscaStrategy {
  buscar(contatos, termo) {
    throw new Error(
      "O método 'buscar' deve ser implementado na subclasse de BuscaStrategy."
    );
  }
}

module.exports = BuscaStrategy;
