console.log(`\nTrabalhando com listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 19;
const estaAcampanhada = false;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

console.log("\nDestinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcampanhada == true;

let contador = 0;
while(contador < 3){
    if(listaDeDestinos[contador] == destino){
        console.log("Destino existe");
    }
    else{
        console.log("Destino não existe");
    }
    contador += 1;
}