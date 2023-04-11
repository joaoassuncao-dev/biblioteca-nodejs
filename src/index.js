import chalk from 'chalk';
import fs from 'fs';

function extraiLinks(texto){
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.]*[^\s]*)\)/gm;
  const capturas = [...texto.matchAll(regex)]
  const resultados = capturas.map(captura => ({[captura[1]]: [captura[2]]}))
  
  return resultados.length !== 0 ? resultados : 'não há links no arquivo'
}

function pegaErro (erro){
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'))
}

//async/await

async function pegaArquivo(caminho) {
 const encoding = 'utf-8';
 try {
   const texto = await fs.promises.readFile(caminho, encoding)
   return extraiLinks(texto)
 } catch(erro) {
   pegaErro(erro);
 }

}

export default pegaArquivo;

//\[[^[\]]*?\] expressao regular para encontrar as palavras dentro de colchetes
//\(https?:\/\/[^\s?#.]*[^\s]*\) expressao regular para encontrar os Links

//\[([^[\]]*?)\]\((https?:\/\/[^\s?#.]*[^\s]*)\) as duas expressoes juntas para encontrar os links
