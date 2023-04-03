import chalk from 'chalk';
import fs from 'fs';

function pegaErro (erro){
    console.log(erro)
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'))
}

//async/await

async function pegaArquivo(caminho) {
 const encoding = 'utf-8';
 try {
   const texto = await fs.promises.readFile(caminho, encoding)
   console.log(chalk.green(texto))
 } catch(erro) {
   pegaErro(erro);
 } finally {
   console.log(chalk.yellow('operação concluída'));
 }
}
//código assincrono com .then()

// function pegaArquivo(caminho){
//     const encoding = 'utf-8';
//     fs.promises
//         .readFile(caminho, encoding)
//         .then((texto) => console.log(chalk.green(texto)))
//         .catch((erro) => pegaErro(erro))
// }

// function pegaArquivo(caminho){
//     const encoding = 'utf-8'
//     fs.readFile(caminho, encoding, (erro, texto) => {
//         if(erro){
//             pegaErro(erro)
//         }
        
//         console.log(chalk.green(texto))
//     }) 
// }

pegaArquivo('./arquivos/texto.md')
pegaArquivo('./arquivos/')