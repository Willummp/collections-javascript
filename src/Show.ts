function Show(list) {
  console.log('--- Listagem completa do estoque ---\n');
  for (let i = 0; i < list.length; i++) {
      console.log(`${i + 1} - ${list[i]}`);
  }
  
}

export { Show }