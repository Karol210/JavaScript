console.group("Cuadrado");
function perimteroCuadrado(lado){
return lado*4;
}

function areaCuadrado(lado){
    return lado*lado;
    }
    
console.groupEnd();

console.group("Triangulo");

function perimetroTriangulo(base, lado1, lado2){
return base+lado1+lado2;
}

function AreaTriangulo(base,alturaTriangulo){
    return (base*alturaTriangulo)/2;
}
console.groupEnd();

console.group("Circulo")

pi=Math.PI;
function diametroC(radio){
    return radio*2;
}
function perimetroCiruculo(radio){
    const diametro=diametroC(radio);
    return diametro*pi;

}

function AreaCirculo(radio){
    return (radio*radio)*pi;
}
console.groupEnd();

function calcularPerimetroCuadrado(){
const input=document.getElementById("InputCuadrado");
const value= input.value;
const perimetro=perimteroCuadrado(value);
alert(perimetro);

}

function calcularAreaCuadrado(){
    const input=document.getElementById("InputCuadrado");
    const value= input.value;
    const area=areaCuadrado(value);
    alert(area);
}