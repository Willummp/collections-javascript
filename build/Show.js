"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Show = void 0;
function Show(list) {
    console.log('--- Listagem completa do estoque ---\n');
    for (var i = 0; i < list.length; i++) {
        console.log("".concat(i + 1, " - ").concat(list[i]));
    }
}
exports.Show = Show;
