import { Estoque } from "./Estoque";

function showMenu () {
    console.clear()
    console.log('---Menu de opções: ---\n');
    console.log('1 - Adicionar item ao estoque:');
    console.log('2 - Remover itens:');
    console.log('3 - Alterar os itens:');
    console.log('4 - Mostrar itens:'); 
    console.log('5 - Sair');
    
}  

export { showMenu }