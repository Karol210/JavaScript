function CalcularALturaTriangulo(lado1,lado2,base){
var altura;
if(lado1===lado2){
var a=lado1*lado1;
var b=base*base;
altura=Math.sqrt(a-(b/2));

}else{
    alert("No son lados iguales");
}

return altura;

}