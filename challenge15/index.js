// opcion simple 
function autonomousDriveOp1(store, movements) {
    let posY = 0
    let posX = 0
    // search for first position
    for (let i = 0; i < store.length; i++) {
      const robotPos = store[i].indexOf('!')
      if (robotPos !== -1) {
        posX = robotPos
        posY = i
        store[posY] = store[posY].replace('!', '.')
      }
    }
  
    for (const move of movements) {
      const nextX = posX + (move === 'R') - (move === 'L')
      const nextY = posY - (move === 'U') + (move === 'D')
      if (store[nextY]?.[nextX] === '.') {
        posX = nextX
        posY = nextY
      }
    }
  
    store[posY] = store[posY].slice(0, posX) + '!' + store[posY].slice(posX + 1)
    return store
  }

// opcion complicandomela
function autonomousDriveOp2(store, movements) {
    // Función para encontrar la posición inicial del robot
    function findInitialPosition(store) {
        for (let i = 0; i < store.length; i++) {
            let j = store[i].indexOf('!');
            if (j !== -1) {
                return { row: i, col: j };
            }
        }
    }
    // Encontrar la posición inicial del robot (!)
    let initialPosition = findInitialPosition(store);

    // Copiar el almacén para no modificar el original
    let updatedStore = store.map(row => row.split(''));
    // Función para mover el robot según la dirección dada
    function moveRobot(store, position, direction) {
        const { row, col } = position;

        switch (direction) {
            case 'R':
                if (col + 1 < store[row].length && store[row][col + 1] === '.') {
                    // Mover a la derecha si hay vía libre
                    store[row][col] = '.';
                    store[row][col + 1] = '!';
                    position.col += 1;
                }
                break;

            case 'L':
                if (col - 1 >= 0 && store[row][col - 1] === '.') {
                    // Mover a la izquierda si hay vía libre
                    store[row][col] = '.';
                    store[row][col - 1] = '!';
                    position.col -= 1;
                }
                break;

            case 'U':
                if (row - 1 >= 0 && store[row - 1][col] === '.') {
                    // Mover hacia arriba si hay vía libre
                    store[row][col] = '.';
                    store[row - 1][col] = '!';
                    position.row -= 1;
                }
                break;

            case 'D':
                if (row + 1 < store.length && store[row + 1][col] === '.') {
                    // Mover hacia abajo si hay vía libre
                    store[row][col] = '.';
                    store[row + 1][col] = '!';
                    position.row += 1;
                }
                break;

            default:
                // Ignorar movimientos no válidos
                break;
        }
    }
    // Realizar los movimientos
    for (let movement of movements) {
        moveRobot(updatedStore, initialPosition, movement);
    }

    // Devolver el resultado como un array de cadenas de texto
    return updatedStore.map(row => row.join(''));
}





// Ejemplo de uso
const store = ['..!....', '...*.*.'];
const movements = ['R', 'R', 'D', 'L'];
const result = autonomousDriveOp1(store, movements);
console.log("autonomousDriveOp1",result);
result = autonomousDriveOp2(store, movements);
console.log("autonomousDriveOp2",result);