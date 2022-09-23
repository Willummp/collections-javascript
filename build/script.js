"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Menu_1 = require("./Menu");
var PromptSync = require("prompt-sync");
var Adicionar_1 = require("./Adicionar");
var Show_1 = require("./Show");
var Remove_1 = require("./Remove");
var prompt = PromptSync();
var list = [];
var option = 0;
do {
    console.clear();
    (0, Menu_1.showMenu)();
    console.log();
    option = Number(prompt('Escolha uma opção: '));
    switch (option) {
        case 1:
            (0, Adicionar_1.addList)(list);
            break;
        case 2:
            (0, Remove_1.Remove)(list);
            break;
        case 3:
            (0, Show_1.Show)(list);
            (0, Remove_1.Remove)(list);
            (0, Adicionar_1.addList)(list);
            break;
        case 4:
            (0, Show_1.Show)(list);
            break;
        case 5:
            console.log('Finalizando a aplicação!');
        default:
            console.log('Opção inválida!');
            break;
    }
    prompt('Pressione ENTER para continuar...');
} while (option != 5);
