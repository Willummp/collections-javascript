import { Estoque } from "./Estoque";
import { showMenu } from "./Menu";
import PromptSync = require('prompt-sync');
import { addList } from "./Adicionar";
import { Show } from "./Show";
import { Remove } from "./Remove";

const prompt = PromptSync()
let list : string [] = []
let option = 0

do {
    console.clear();
    showMenu();
    console.log();
    option = Number(prompt('Escolha uma opção: '))

    switch (option) {
        case 1:
            addList(list);
            break;
        case 2:
            Remove(list);
            break
        case 3:
            Show(list)
            Remove(list)
            addList(list)
            break
        case 4:
            Show(list);
            break
        case 5:
            console.log('Finalizando a aplicação!');
            
        default:
            console.log('Opção inválida!')
            break;
    }
    prompt('Pressione ENTER para continuar...')
}while (option != 5);