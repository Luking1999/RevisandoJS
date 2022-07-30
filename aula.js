

const anime = {
    titulo: 'One Piece',
    ano: 1999,
    criador: 'Eiichiro Oda',
}

exibirPropriedades(anime);
function exibirPropriedades(obj){
    for (let prop in obj) 
        if (typeof obj[prop] === 'string') 
            console.log(prop, obj[prop])
}
/**
 * maneira extensa
 * function criarManga(){
 *  const manga = {
 *      nomeManga: 'Wind Breaker',
 *      autorManga: 'Jo Yongseuk',
 *      categoria: ['Comédia', 'Drama', 'Esportes', 'Romance'],
 *      ler: function(){
 *          console.log("cap1: Estou indo para biblioteca.")
 *      }
 *  } 
 * }
 */
//  camelCase umDoisTresQuatro
// function criarManga(nomeManga, autorManga, categoria){
//     return {
//         nomeManga,
//         autorManga,
//         categoria,
//         ler(){
//             console.log("cap1: Estou indo para biblioteca.")
//         }
//     }
// }
// const mangaWB = criarManga('Wind Breaker', 'Jo Yongseuk', ['Comédia', 'Drama', 'Esportes', 'Romance']);
// console.log(mangaWB);

//  PascalCase UmDoisTres
function Manga(nomeManga, autorManga, categoria){
    this.nomeManga = nomeManga,
    this.autorManga = autorManga,
    this.categoria = categoria,
    this.ler = function(){
        console.log("cap1: NPC a: Eae, bora ir na lan house agora? to afim de jogar um lolzinho hoje. NPC b: A gente tem prova amanhã. Vamos outra hora.")
    }
}

const manga = new Manga('Wind Breaker', 'Jo Yongseuk', 'teste');
console.log(manga);

const mouse = {
    cor : 'red',
    marcar: 'dazz'
}

mouse.velocidade = 800;
mouse.trocarDPI = function(){
    console.log('mudando DPI')
}
delete mouse.velocidade
delete mouse.trocarDPI

console.log(mouse)


// clonar objeto

const objClonado = Object.assign({
    origem: 'Japão'
}, anime);
console.log(objClonado)

// spread - I guess is the name
const objClonado2 = {...anime} 
console.log(objClonado2)
