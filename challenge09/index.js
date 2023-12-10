function adjustLights(lights) {
    let changes = 0;

    for (let i = 0; i < lights.length; i++) {
        if (i % 2 === 0 && lights[i] !== '🟢') {
        changes++;
        } else if (i % 2 === 1 && lights[i] !== '🔴') {
        changes++;
        }
    }

    // Si el número de cambios es mayor a la mitad del número de luces, 
    // es más eficiente cambiar las luces que no se han contado.
    if (changes > lights.length / 2) {
        changes = lights.length - changes;
    }

    return changes;
}

console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']))
// -> 1 (cambias la cuarta luz a 🔴)

console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']))
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']))
// -> 0 (ya están alternadas)

console.log(adjustLights(['🔴', '🔴', '🔴']))
// -> 1 (cambias la segunda luz a 🟢)