function maxDistance(movements: string[]): number{
    // Code here
    let derecha = 0
    let izquierda = 0
    let extras = 0
    let result = 0
     for (const move of movements) {
      if (move =='<'){
        ++derecha
      } else if (move =='>'){
        ++izquierda
      }else{
        ++extras
      }
    }
    if (derecha > izquierda){
      result = derecha - izquierda + extras
    }else{
       result =  izquierda + extras - derecha
    }
    return result
  }