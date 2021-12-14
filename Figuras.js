console.group("cuadrado")
const ladoCuadrado=5;
console.log("Los lados del cuadrado miden "+ ladoCuadrado + " cm");
const perimetroCuadrado= ladoCuadrado*4;
console.log("El perimetro del cuadrado es "+ perimetroCuadrado + " cm");

const AreaCuadrada= ladoCuadrado*ladoCuadrado;
console.log("El area del cuadrado es "+ AreaCuadrada);

console.groupEnd();
//Codigo del triangulo
console.group("Triangulo");
const ladoTriangulo1=6;
const ladoTriangulo2=6;
const Base=4;
const alturaTriangulo=4;

console.log("Los lados del Triangulo 1 miden "
+ ladoTriangulo1 
+ " cm, " 
+ "Los lados del Triangulo 2 miden " 
+"cm, "
+ ladoTriangulo2 
+ " La bas del Triangulo 1 miden " 
+Base 
+ " cm"
+"La altura del Triangulo es "
+alturaTriangulo);

const perimetroTriangulo= ladoTriangulo2+Base+ladoTriangulo1;
console.log("El perimetro del cuadrado es "+ perimetroTriangulo + " cm");

const AreaTriangulo= (Base*alturaTriangulo)/2;
console.log("El area del cuadrado es "+ AreaTriangulo+ " cm^2");
console.groupEnd();

//Codigo del circulo

console.group("Circulo")
const Radio=6;
const pi=Math.PI;


const perimetroCirculo= (Radio*2)*(2*pi);
console.log("El perimetro de la circunferencia es "+ perimetroTriangulo + " cm");

const AreaCirculo= (Radio*2)*(pi*pi);
console.log("El area del circulo es "+ AreaTriangulo+ " cm^2");

console.groupEnd