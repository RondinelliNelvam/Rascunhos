var produtos = [
    {id: 1, descricao: "Smartphone", categoria: "Eletrônico"},
    {id: 2, descricao: "Notebook", categoria: "Eletrônico"},
    {id: 3, descricao: "Geladeira", categoria: "Eletrodoméstico"},
    {id: 4, descricao: "Liquidificador", categoria: "Eletrodoméstico"},
    {id: 5, descricao: "Fogão", categoria: "Eletrodoméstico"}
]
function retornaEletronico (value){
    if (value.categoria == "Eletrônico")
    return value;
}
var produtosEletronico = produtos.filter((value)=> {    if (value.categoria == "Eletrônico")
return value;});
produtosEletronico.forEach(produtoEletro => { 
    console.log(produtoEletro);
})
/* saída:
Object {descricao: "Smartphone", categoria: "Eletrônico"}
Object {descricao: "Notebook", categoria: "Eletrônico"}
*/