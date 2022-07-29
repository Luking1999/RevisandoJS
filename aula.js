

const anime = {
    titulo: 'One Piece',
    ano: '1999',
    criador: 'Eiichiro Oda',
}

exibirPropriedades(anime);
function exibirPropriedades(obj){
    for (let prop in obj) 
        if (typeof prop === 'string') 
            console.log(prop, obj[prop])
        
}