function optimizeIntervals(intervals) {
    // Paso 1: Ordenar los intervalos según el primer elemento
    intervals.sort((a, b) => a[0] - b[0]);

    // Paso 2: Fusionar intervalos superpuestos
    const mergedIntervals = [];
    let currentInterval = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        const nextInterval = intervals[i];

        // Verificar si hay superposición
        if (currentInterval[1] >= nextInterval[0]) {
        // Fusionar intervalos
        currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
        } else {
        // No hay superposición, agregar intervalo actual a la lista
        mergedIntervals.push([...currentInterval]);
        currentInterval = nextInterval;
        }
    }

    // Agregar el último intervalo a la lista
    mergedIntervals.push([...currentInterval]);

    return mergedIntervals;
}
console.log( optimizeIntervals([
    [5, 8],
    [2, 7],
    [3, 4]
  ])) // [[2, 8]]
  
console.log( optimizeIntervals([
    [1, 3],
    [8, 10],
    [2, 6]
  ])) // [[1, 6], [8, 10]]
  
console.log(optimizeIntervals([
    [3, 4],
    [1, 2],
    [5, 6]
  ]) )// [[1, 2], [3, 4], [5, 6]]