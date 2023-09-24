Company API

Structure

Companhia
    -> Produto
        -> Modelo


Companhia
{
    id: 1,
    nome: 'Exemplo'
}

Produto: api externa simulada
    Api.findProdutos()
    Api.findProdutos(id)

Modelo: banco de dados simulado (ORM)
    Modelo.findAll()
    Modelo.findAll(id)
    