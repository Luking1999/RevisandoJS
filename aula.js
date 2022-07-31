
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


const data1 = new Date()
const data2 = new Date("july 07 2022 18:01")
const data3 = new Date(2022,06,30,30,7)


data3.setFullYear(2030)
data2.toDateString()

function exibirAnime(anime){
    for (const lerAnime in anime) {
        console.log(lerAnime, anime[anime])
    }
}

exibirAnime(anime)

function Musica(nome,letra, autor){  
    this.nome = nome
    this.letra = letra
    this.autor = autor
}
const musica = new Musica('Withou me', `Obie Trice, real name no gimmicks
Two trailer park girls go round the outside`, 'Eminem')
const musica2 = new Musica('All I Want', `All I want is nothing more
To hear you knocking at my door
'Cause if I could see your face once more`, 'Kodaline')
const musica3 =  new Musica('Withou me', `Obie Trice, real name no gimmicks
Two trailer park girls go round the outside`, 'Eminem')

function saoIguais(musica, musica2){
    //compara se as musicas sao iguais
    return musica.nome === musica3.nome && musica.letra === musica3.letra && musica.autor === musica3.autor
}
console.log(saoIguais(musica, musica3))


function temMemoriaDaMusicaIgual(musica, musica2){
    //compara se a referencia a ponta para o mesmo local da memoria
    return musica === musica3
}

console.log(saoIguais(musica, musica3))

let postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    vizualizacoes: 10,
    comentarios: [
        { autor: 'a', mensagem: 'b'},
        { autor: 'c', mensagem: 'd'}
    ],
    estaAoVivo : true
}

console.log(postagem)
