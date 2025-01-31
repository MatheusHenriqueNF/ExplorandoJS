console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 19;
const estaAcampanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// if(idadeComprador >= 18 ){
//     console.log("Comprador é maior de idade");
//     listaDeDestinos.splice(1,1); //removendo item
// } else if(estaAcampanhada == true){
//         console.log("Comprador está acampanhado");
//         listaDeDestinos.splice(1,1); //removendo item
// } else{
//     console.log("Comprador não é maior de idade e não posso vender");
//     }

if(idadeComprador >= 18 || estaAcampanhada == true){
    console.log("Boa Viagem!");
    listaDeDestinos.splice(1,1); //removendo item
} else{
    console.log("Comprador não é maior de idade e não posso vender");
}

console.log("Embarque: \n \n");
if(idadeComprador >= 18 && temPassagemComprada == true){
    console.log("Boa Viagem!");
} else{
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);
