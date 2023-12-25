function compile(code) {
    let counter = 0;
    let ret = null;
    for (let i = 0; i < code.length; i++) {
      counter += +(code[i] == "+");
      counter -= +(code[i] == "-");
      counter = [counter, counter * 2][+(code[i] == "*")];
      ret = [ret, i][+(code[i] == "%")];
      if (ret != null && code[i] == "<") {
        i = ret;
        ret = null;
      }
      i = [i, code.indexOf("?")][+(counter <= 0 && code[i] == "¿")];
    }
    return counter;
  }
  console.log(compile('++*-')) // 3
  // (1 + 1) * 2 - 1 = 3

  console.log( compile('++%++<') )// 6
  // 1 + 1 + 1 + 1 + 1 + 1 = 6

  console.log( compile('++<--') )// 0
  // 1 + 1 - 1 - 1 = 0

  console.log( compile('++¿+?')) // 3
  // 1 + 1 + 1 = 3

  console.log( compile('--¿+++?')) // -2
  // - 1 - 1 = -2