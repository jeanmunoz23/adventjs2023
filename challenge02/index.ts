function manufacture(gifts, materials) : string[] { 
    const result: string[] = []; 
    for (const gift of gifts) { 
      let canBeManufactured = true; 
      for (const char of gift) { 
        if (!materials.includes(char)) { 
          canBeManufactured = false; 
          break; 
          } 
        } 
        if (canBeManufactured) { result.push(gift); 
        } 
    } return result;
  }