function cuadradoLista(lista) {
    return lista.map(num => num * num);
}

const lista = [2, 3, 4];
const resultado = cuadradoLista(lista);
console.log(resultado);  