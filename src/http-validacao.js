import chalk from "chalk"
function extraiLinks(arrayLinks) {
    return arrayLinks.map((objetoLink) => Object.values(objetoLink).join())        
}

async function checaStatus(listaUrls) { 
    const arrayStatus = await Promise
    .all(
        listaUrls.map(async (url) => {
            try {
                const response = await fetch(url)
                return `${response.status} - ${response.statusText}`;
            } 
            catch (erro) {
                return manejaErros(erro)
            }
        })
    )
    return arrayStatus
}

function manejaErros(erro) {
    if(erro.cause.code === 'ENOTFOUND') {
        return 'link não encontrado'
    }else{
        return 'ocorreu algum erro'
    }
}

export default async function listaValidada(listaLinks) {
    const links = extraiLinks(listaLinks)
    const status = await checaStatus(links)
    
    return listaLinks.map((objeto, indice) => ({
        ...objeto,
        status: status[indice]
    }))
}   


