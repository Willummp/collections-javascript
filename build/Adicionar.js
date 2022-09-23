"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addList = void 0;
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function addList(list) {
    var position = list.length;
    var item = prompt('Digite o novo item da lista: ');
    list[position] = item;
    console.log("\n".concat(item, " Foi adicionado na lista!"));
}
exports.addList = addList;
