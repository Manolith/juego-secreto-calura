function imc(peso, altura){
    let imc = peso / (altura*altura);
    return imc;
}
imc(80,160)

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  // Ejemplo de uso
  let numero = 5;
  let resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`);
 
function convertirDolaresAReales(dolares) {
    var cotizacionDolar = 4.80;
    var reales = dolares * cotizacionDolar;
    return reales;
}
  // Ejemplo de uso
let valorEnDolar = 50;
let valorEnReales = convertirDolaresAReales(valorEnDolar);
console.log(`${valorEnDolar} ${dolares==1 ? dólar:dólares}  es R$ ${valorEnReales}`);  

function calcularAreaYPerimetroRectangular(altura, anchura) {
    var area = altura * anchura;
    var perimetro = 2 * (altura + anchura);
    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);
}
  // Ejemplo de uso
let altura = 3; // en metros
let anchura = 5; // en metros
calcularAreaYPerimetroRectangular(altura, anchura);

function calcularAreaYPerimetroCircular(radio) {
    var pi = 3.14;
    var area = pi * radio * radio;
    var perimetro = 2 * pi * radio;
    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);
}
  // Ejemplo de uso
let radio = 4; // en metros
calcularAreaYPerimetroCircular(radio);

function mostrarTablaDeMultiplicar(numero1) {
    for (var i = 1; i <= 10; i++) {
      var resultado = numero1 * i;
      console.log(numero1 + " x " + i + " = " + resultado);
    }
}
  // Ejemplo de uso
let numero1 = 7;
mostrarTablaDeMultiplicar(numero1);