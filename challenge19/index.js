function revealSabotage(store) {
    for (let i = 0; i < store.length; ++i) {
      for (let j = 0; j < store[0].length; ++j) {
        const celda = store[i][j];
        let prev = store[i - 1]
        let actual =store[i]
        let next = store[i + 1]
        const c1 = +(prev?.[j - 1] === '*') + +(prev?.[j] === '*');
        const c2 = +(prev?.[j + 1] === '*') + +(actual?.[j - 1] === '*');
        const c3 = +(actual?.[j + 1] === '*') + +(next?.[j - 1] === '*');
        const c4 = +(next?.[j] === '*') + +(next?.[j + 1] === '*');
        const calc =c1 + c2 + c3 + c4
    
        store[i][j] = [celda, `${calc}`][+(calc > 0) * +(celda === ' ')];
      }
    }
  
    return store;
}