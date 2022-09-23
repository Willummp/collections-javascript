import { Show } from './Show';
import PromptSync = require('prompt-sync');

const prompt = PromptSync()

function Remove(list) {
    Show
    const positionText = prompt('Qual elemento você deseja remover?: ')
    const position = Number(positionText) - 1
    list.splice(position, 1);
}

export { Remove }