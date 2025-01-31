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
let destinoExiste = false;
while(contador < 3){
    
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }

    contador += 1;
}

console.log("Destino exite: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa viagem!");
}
else{
    console.log("Desculpe, não podemos te oferecer este destino.");
}

for(let i = 0 ; i < 3; i++){
    
    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
        break;
    }

}