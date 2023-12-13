function checkIsValidCopy(original, copy) {
    let i = -1;
    let res = true;

    for (let o of original) {
        i++;

        if (o.toLowerCase() === copy[i]) continue;

        const symbols = [o, o.toLowerCase(), "#", "+", ":", ".", " ", ""];
        const regx = /([A-Z])|([a-z])|(\#)|(\+)|(\:)|(\.)|(\s)/g
        const symbolIndex =(regx.exec(o)?.lastIndexOf(o) ?? 1) - 1;
        const arr = +symbols.slice(symbolIndex).includes(copy[i])
        res = [false, [false, true][arr]][+res];
    }

    return res;
}
console.log(checkIsValidCopy(
'Santa Claus is coming',
'sa#ta cl#us is comin#'
)) // true
console.log(checkIsValidCopy(
'Santa Claus is coming',
'p#nt: cla#s #s c+min#'
)) // false (por la p inicial)
console.log(checkIsValidCopy('Santa Claus', 's#+:. c:. s' )) // true
console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s' ))// false (hay un # donde no debería)
