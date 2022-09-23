"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Remove = void 0;
var Show_1 = require("./Show");
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function Remove(list) {
    Show_1.Show;
    var positionText = prompt('Qual elemento você deseja remover?: ');
    var position = Number(positionText) - 1;
    list.splice(position, 1);
}
exports.Remove = Remove;
